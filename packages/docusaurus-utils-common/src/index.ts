/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
// https://github.com/it990110/gityjf/issues/8883#issuecomment-1516328368
export const blogPostContainerID = '__blog-post-container';

export {
  default as applyTrailingSlash,
  type ApplyTrailingSlashParams,
} from './applyTrailingSlash';
export {getErrorCausalChain} from './errorUtils';
