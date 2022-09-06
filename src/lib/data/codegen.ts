import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: [
		{
			'https://gapi.storyblok.com/v1/api': {
				headers: {
					Token: `${process.env.STORYBLOCK_ACCESS_TOKEN}`
				}
			}
		}
	],
	documents: ['src/**/*.gql'],
	generates: {
		'src/lib/data/storyblok.ts': {
			plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
			config: {
				maybeValue: 'T',
				rawRequest: true,
				avoidOptionals: {
					field: true,
					inputValue: true,
					object: true,
					defaultValue: true
				}
			}
		}
	}
};

export default config;
