// Unless explicitly stated otherwise all files in this repository are licensed under the MIT License.
// This product includes software developed at Datadog (https://www.datadoghq.com/).
// Copyright 2019-Present Datadog, Inc.

import type { BundlerFullName, Options } from '@dd/core/types';
import type { RspackOptions } from '@rspack/core';
import type { BuildOptions } from 'esbuild';
import type { RollupOptions } from 'rollup';
import type { InlineConfig } from 'vite';
import type { Configuration as Configuration4 } from 'webpack4';
import type { Configuration } from 'webpack5';

export type BundlerOptionsOverrides = {
    rollup?: Partial<RollupOptions>;
    vite?: Partial<NonNullable<InlineConfig['build']>['rollupOptions']>;
    esbuild?: Partial<BuildOptions>;
    rspack?: Partial<RspackOptions>;
    webpack5?: Partial<Configuration>;
    webpack4?: Partial<Configuration4>;
};

export type BundlerOverrides =
    | BundlerOptionsOverrides
    | ((workingDir: string) => BundlerOptionsOverrides);

export type Bundler = {
    name: BundlerFullName;
    // TODO: Better type this without "any".
    config: (seed: string, pluginOverrides: Partial<Options>, bundlerOverrides: any) => any;
    run: BundlerRunFunction;
    version: string;
};

export type RunResult = {
    errors: string[];
    workingDir: string;
};
export type CleanupFn = (() => Promise<void>) & RunResult;
export type BundlerRunFunction = (
    seed: string,
    pluginOverrides: Options,
    bundlerOverrides: any,
) => Promise<CleanupFn>;
