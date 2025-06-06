// Unless explicitly stated otherwise all files in this repository are licensed under the MIT License.
// This product includes software developed at Datadog (https://www.datadoghq.com/).
// Copyright 2019-Present Datadog, Inc.

describe('Factory', () => {
    test('Should not throw with no options', async () => {
        const { buildPluginFactory } = await import('@dd/factory');
        expect(() => {
            const factory = buildPluginFactory({ bundler: {}, version: '1.0.0' });
            // Vite could call the factory without options.
            // @ts-expect-error - We are testing the factory without options.
            factory.vite();
        }).not.toThrow();
    });
});
