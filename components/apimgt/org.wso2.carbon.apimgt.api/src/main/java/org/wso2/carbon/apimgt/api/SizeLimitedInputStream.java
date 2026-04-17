/*
 *   Copyright (c) 2026, WSO2 LLC. (https://www.wso2.com)
 *
 *   WSO2 LLC. licenses this file to you under the Apache License,
 *   Version 2.0 (the "License"); you may not use this file except
 *   in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */
package org.wso2.carbon.apimgt.api;

import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;

/**
 * {@code SizeLimitedInputStream} is a wrapper around an {@link InputStream} that enforces a maximum
 * number of bytes that can be read. When the configured limit (in bytes) is exceeded, it throws a
 * {@link FileSizeLimitExceededException}.
 */
public class SizeLimitedInputStream extends FilterInputStream {

    private final long maxSize;
    private long bytesRead = 0;

    public SizeLimitedInputStream(InputStream in, long maxSize) {
        super(in);
        this.maxSize = maxSize;
    }

    @Override
    public int read() throws IOException {
        int data = super.read();
        if (data != -1) {
            bytesRead++;
            if (bytesRead > maxSize) {
                throw new FileSizeLimitExceededException(
                        "File size exceeds maximum allowed limit of " + maxSize + " bytes");
            }
        }
        return data;
    }

    @Override
    public int read(byte[] b, int off, int len) throws IOException {
        int count = super.read(b, off, len);
        if (count != -1) {
            bytesRead += count;
            if (bytesRead > maxSize) {
                throw new FileSizeLimitExceededException(
                        "File size exceeds maximum allowed limit of " + maxSize + " bytes");
            }
        }
        return count;
    }
}
