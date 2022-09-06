import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockScalar: any;
  ISO8601DateTime: any;
  JsonScalar: any;
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String'];
  id: Scalars['Int'];
  isFolder: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
};

export type Asset = {
  __typename?: 'Asset';
  alt: Maybe<Scalars['String']>;
  copyright: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  focus: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type CasestudyComponent = {
  __typename?: 'CasestudyComponent';
  _editable: Maybe<Scalars['String']>;
  _uid: Maybe<Scalars['String']>;
  component: Maybe<Scalars['String']>;
  description: Maybe<Scalars['JsonScalar']>;
  featuredImage: Maybe<Asset>;
  title: Maybe<Scalars['String']>;
  websiteUrl: Maybe<Link>;
};

export type CasestudyFilterQuery = {
  title: InputMaybe<FilterQueryOperations>;
};

export type CasestudyItem = {
  __typename?: 'CasestudyItem';
  alternates: Maybe<Array<Maybe<Alternate>>>;
  content: Maybe<CasestudyComponent>;
  created_at: Maybe<Scalars['String']>;
  default_full_slug: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type CasestudyItems = {
  __typename?: 'CasestudyItems';
  items: Maybe<Array<Maybe<CasestudyItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates: Maybe<Array<Maybe<Alternate>>>;
  content: Maybe<Scalars['JsonScalar']>;
  content_string: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['String']>;
  default_full_slug: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items: Maybe<Array<Maybe<ContentItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type FaqComponent = {
  __typename?: 'FaqComponent';
  _editable: Maybe<Scalars['String']>;
  _uid: Maybe<Scalars['String']>;
  answer: Maybe<Scalars['JsonScalar']>;
  component: Maybe<Scalars['String']>;
  question: Maybe<Scalars['String']>;
};

export type FaqFilterQuery = {
  question: InputMaybe<FilterQueryOperations>;
};

export type FaqItem = {
  __typename?: 'FaqItem';
  alternates: Maybe<Array<Maybe<Alternate>>>;
  content: Maybe<FaqComponent>;
  created_at: Maybe<Scalars['String']>;
  default_full_slug: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type FaqItems = {
  __typename?: 'FaqItems';
  items: Maybe<Array<Maybe<FaqItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type FilterQueryOperations = {
  /** Must match all values of given array */
  all_in_array: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Greater than float value */
  gt_float: InputMaybe<Scalars['Float']>;
  /** Greater than integer value */
  gt_int: InputMaybe<Scalars['Int']>;
  /** Matches exactly one value */
  in: InputMaybe<Scalars['String']>;
  /** Matches any value of given array */
  in_array: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches exactly one integer value */
  in_int: InputMaybe<Scalars['Int']>;
  /** Matches exactly one value with a wildcard search using * */
  like: InputMaybe<Scalars['String']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Less than float value */
  lt_float: InputMaybe<Scalars['Float']>;
  /** Less than integer value */
  lt_int: InputMaybe<Scalars['Int']>;
  /** Matches all without the given value */
  not_in: InputMaybe<Scalars['String']>;
  /** Matches all without the given value */
  not_like: InputMaybe<Scalars['String']>;
};

export type HomepageComponent = {
  __typename?: 'HomepageComponent';
  _editable: Maybe<Scalars['String']>;
  _uid: Maybe<Scalars['String']>;
  component: Maybe<Scalars['String']>;
  features: Maybe<Scalars['BlockScalar']>;
};

export type HomepageItem = {
  __typename?: 'HomepageItem';
  alternates: Maybe<Array<Maybe<Alternate>>>;
  content: Maybe<HomepageComponent>;
  created_at: Maybe<Scalars['String']>;
  default_full_slug: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type HomepageItems = {
  __typename?: 'HomepageItems';
  items: Maybe<Array<Maybe<HomepageItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type Link = {
  __typename?: 'Link';
  cachedUrl: Scalars['String'];
  email: Maybe<Scalars['String']>;
  fieldtype: Scalars['String'];
  id: Scalars['String'];
  linktype: Scalars['String'];
  story: Maybe<Story>;
  url: Scalars['String'];
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id: Maybe<Scalars['Int']>;
  isFolder: Maybe<Scalars['Boolean']>;
  isStartpage: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['Int']>;
  position: Maybe<Scalars['Int']>;
  published: Maybe<Scalars['Boolean']>;
  slug: Maybe<Scalars['String']>;
  uuid: Maybe<Scalars['String']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  CasestudyItem: Maybe<CasestudyItem>;
  CasestudyItems: Maybe<CasestudyItems>;
  ContentNode: Maybe<ContentItem>;
  ContentNodes: Maybe<ContentItems>;
  DatasourceEntries: Maybe<DatasourceEntries>;
  Datasources: Maybe<Datasources>;
  FaqItem: Maybe<FaqItem>;
  FaqItems: Maybe<FaqItems>;
  HomepageItem: Maybe<HomepageItem>;
  HomepageItems: Maybe<HomepageItems>;
  Links: Maybe<LinkEntries>;
  RateLimit: Maybe<RateLimit>;
  SettingsItem: Maybe<SettingsItem>;
  SettingsItems: Maybe<SettingsItems>;
  Space: Maybe<Space>;
  Tags: Maybe<Tags>;
  TestimonialItem: Maybe<TestimonialItem>;
  TestimonialItems: Maybe<TestimonialItems>;
};


export type QueryTypeCasestudyItemArgs = {
  find_by: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
};


export type QueryTypeCasestudyItemsArgs = {
  by_slugs: InputMaybe<Scalars['String']>;
  by_uuids: InputMaybe<Scalars['String']>;
  by_uuids_ordered: InputMaybe<Scalars['String']>;
  excluding_fields: InputMaybe<Scalars['String']>;
  excluding_ids: InputMaybe<Scalars['String']>;
  excluding_slugs: InputMaybe<Scalars['String']>;
  fallback_lang: InputMaybe<Scalars['String']>;
  filter_query: InputMaybe<Scalars['JsonScalar']>;
  filter_query_v2: InputMaybe<CasestudyFilterQuery>;
  first_published_at_gt: InputMaybe<Scalars['String']>;
  first_published_at_lt: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['String']>;
  is_startpage: InputMaybe<Scalars['String']>;
  language: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
  per_page: InputMaybe<Scalars['Int']>;
  published_at_gt: InputMaybe<Scalars['String']>;
  published_at_lt: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
  search_term: InputMaybe<Scalars['String']>;
  sort_by: InputMaybe<Scalars['String']>;
  starts_with: InputMaybe<Scalars['String']>;
  with_tag: InputMaybe<Scalars['String']>;
};


export type QueryTypeContentNodeArgs = {
  find_by: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
};


export type QueryTypeContentNodesArgs = {
  by_slugs: InputMaybe<Scalars['String']>;
  by_uuids: InputMaybe<Scalars['String']>;
  by_uuids_ordered: InputMaybe<Scalars['String']>;
  excluding_fields: InputMaybe<Scalars['String']>;
  excluding_ids: InputMaybe<Scalars['String']>;
  excluding_slugs: InputMaybe<Scalars['String']>;
  fallback_lang: InputMaybe<Scalars['String']>;
  filter_query: InputMaybe<Scalars['JsonScalar']>;
  first_published_at_gt: InputMaybe<Scalars['String']>;
  first_published_at_lt: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['String']>;
  is_startpage: InputMaybe<Scalars['String']>;
  language: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
  per_page: InputMaybe<Scalars['Int']>;
  published_at_gt: InputMaybe<Scalars['String']>;
  published_at_lt: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
  search_term: InputMaybe<Scalars['String']>;
  sort_by: InputMaybe<Scalars['String']>;
  starts_with: InputMaybe<Scalars['String']>;
  with_tag: InputMaybe<Scalars['String']>;
};


export type QueryTypeDatasourceEntriesArgs = {
  datasource: InputMaybe<Scalars['String']>;
  dimension: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
  per_page: InputMaybe<Scalars['Int']>;
};


export type QueryTypeDatasourcesArgs = {
  by_ids: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search: InputMaybe<Scalars['String']>;
};


export type QueryTypeFaqItemArgs = {
  find_by: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
};


export type QueryTypeFaqItemsArgs = {
  by_slugs: InputMaybe<Scalars['String']>;
  by_uuids: InputMaybe<Scalars['String']>;
  by_uuids_ordered: InputMaybe<Scalars['String']>;
  excluding_fields: InputMaybe<Scalars['String']>;
  excluding_ids: InputMaybe<Scalars['String']>;
  excluding_slugs: InputMaybe<Scalars['String']>;
  fallback_lang: InputMaybe<Scalars['String']>;
  filter_query: InputMaybe<Scalars['JsonScalar']>;
  filter_query_v2: InputMaybe<FaqFilterQuery>;
  first_published_at_gt: InputMaybe<Scalars['String']>;
  first_published_at_lt: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['String']>;
  is_startpage: InputMaybe<Scalars['String']>;
  language: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
  per_page: InputMaybe<Scalars['Int']>;
  published_at_gt: InputMaybe<Scalars['String']>;
  published_at_lt: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
  search_term: InputMaybe<Scalars['String']>;
  sort_by: InputMaybe<Scalars['String']>;
  starts_with: InputMaybe<Scalars['String']>;
  with_tag: InputMaybe<Scalars['String']>;
};


export type QueryTypeHomepageItemArgs = {
  find_by: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
};


export type QueryTypeHomepageItemsArgs = {
  by_slugs: InputMaybe<Scalars['String']>;
  by_uuids: InputMaybe<Scalars['String']>;
  by_uuids_ordered: InputMaybe<Scalars['String']>;
  excluding_fields: InputMaybe<Scalars['String']>;
  excluding_ids: InputMaybe<Scalars['String']>;
  excluding_slugs: InputMaybe<Scalars['String']>;
  fallback_lang: InputMaybe<Scalars['String']>;
  filter_query: InputMaybe<Scalars['JsonScalar']>;
  first_published_at_gt: InputMaybe<Scalars['String']>;
  first_published_at_lt: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['String']>;
  is_startpage: InputMaybe<Scalars['String']>;
  language: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
  per_page: InputMaybe<Scalars['Int']>;
  published_at_gt: InputMaybe<Scalars['String']>;
  published_at_lt: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
  search_term: InputMaybe<Scalars['String']>;
  sort_by: InputMaybe<Scalars['String']>;
  starts_with: InputMaybe<Scalars['String']>;
  with_tag: InputMaybe<Scalars['String']>;
};


export type QueryTypeLinksArgs = {
  paginated: InputMaybe<Scalars['Boolean']>;
  starts_with: InputMaybe<Scalars['String']>;
};


export type QueryTypeSettingsItemArgs = {
  find_by: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
};


export type QueryTypeSettingsItemsArgs = {
  by_slugs: InputMaybe<Scalars['String']>;
  by_uuids: InputMaybe<Scalars['String']>;
  by_uuids_ordered: InputMaybe<Scalars['String']>;
  excluding_fields: InputMaybe<Scalars['String']>;
  excluding_ids: InputMaybe<Scalars['String']>;
  excluding_slugs: InputMaybe<Scalars['String']>;
  fallback_lang: InputMaybe<Scalars['String']>;
  filter_query: InputMaybe<Scalars['JsonScalar']>;
  filter_query_v2: InputMaybe<SettingsFilterQuery>;
  first_published_at_gt: InputMaybe<Scalars['String']>;
  first_published_at_lt: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['String']>;
  is_startpage: InputMaybe<Scalars['String']>;
  language: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
  per_page: InputMaybe<Scalars['Int']>;
  published_at_gt: InputMaybe<Scalars['String']>;
  published_at_lt: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
  search_term: InputMaybe<Scalars['String']>;
  sort_by: InputMaybe<Scalars['String']>;
  starts_with: InputMaybe<Scalars['String']>;
  with_tag: InputMaybe<Scalars['String']>;
};


export type QueryTypeTagsArgs = {
  starts_with: InputMaybe<Scalars['String']>;
};


export type QueryTypeTestimonialItemArgs = {
  find_by: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
};


export type QueryTypeTestimonialItemsArgs = {
  by_slugs: InputMaybe<Scalars['String']>;
  by_uuids: InputMaybe<Scalars['String']>;
  by_uuids_ordered: InputMaybe<Scalars['String']>;
  excluding_fields: InputMaybe<Scalars['String']>;
  excluding_ids: InputMaybe<Scalars['String']>;
  excluding_slugs: InputMaybe<Scalars['String']>;
  fallback_lang: InputMaybe<Scalars['String']>;
  filter_query: InputMaybe<Scalars['JsonScalar']>;
  filter_query_v2: InputMaybe<TestimonialFilterQuery>;
  first_published_at_gt: InputMaybe<Scalars['String']>;
  first_published_at_lt: InputMaybe<Scalars['String']>;
  from_release: InputMaybe<Scalars['String']>;
  is_startpage: InputMaybe<Scalars['String']>;
  language: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
  per_page: InputMaybe<Scalars['Int']>;
  published_at_gt: InputMaybe<Scalars['String']>;
  published_at_lt: InputMaybe<Scalars['String']>;
  resolve_links: InputMaybe<Scalars['String']>;
  resolve_relations: InputMaybe<Scalars['String']>;
  search_term: InputMaybe<Scalars['String']>;
  sort_by: InputMaybe<Scalars['String']>;
  starts_with: InputMaybe<Scalars['String']>;
  with_tag: InputMaybe<Scalars['String']>;
};

export type RateLimit = {
  __typename?: 'RateLimit';
  maxCost: Scalars['Int'];
};

export type SettingsComponent = {
  __typename?: 'SettingsComponent';
  _editable: Maybe<Scalars['String']>;
  _uid: Maybe<Scalars['String']>;
  component: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  slogan: Maybe<Scalars['String']>;
  url: Maybe<Link>;
};

export type SettingsFilterQuery = {
  email: InputMaybe<FilterQueryOperations>;
  name: InputMaybe<FilterQueryOperations>;
  slogan: InputMaybe<FilterQueryOperations>;
};

export type SettingsItem = {
  __typename?: 'SettingsItem';
  alternates: Maybe<Array<Maybe<Alternate>>>;
  content: Maybe<SettingsComponent>;
  created_at: Maybe<Scalars['String']>;
  default_full_slug: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type SettingsItems = {
  __typename?: 'SettingsItems';
  items: Maybe<Array<Maybe<SettingsItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String'];
  id: Scalars['Int'];
  languageCodes: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  version: Scalars['Int'];
};

export type Story = {
  __typename?: 'Story';
  alternates: Maybe<Array<Maybe<Alternate>>>;
  content: Maybe<Scalars['JsonScalar']>;
  createdAt: Maybe<Scalars['String']>;
  firstPublishedAt: Maybe<Scalars['String']>;
  fullSlug: Maybe<Scalars['String']>;
  groupId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  isStartpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  metaData: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  publishedAt: Maybe<Scalars['String']>;
  releaseId: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sortByDate: Maybe<Scalars['String']>;
  tagList: Maybe<Array<Maybe<Scalars['String']>>>;
  translatedSlugs: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  taggingsCount: Scalars['Int'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TestimonialComponent = {
  __typename?: 'TestimonialComponent';
  _editable: Maybe<Scalars['String']>;
  _uid: Maybe<Scalars['String']>;
  author_company: Maybe<Scalars['String']>;
  author_name: Maybe<Scalars['String']>;
  author_picture: Maybe<Asset>;
  author_role: Maybe<Scalars['String']>;
  component: Maybe<Scalars['String']>;
  testimonial: Maybe<Scalars['JsonScalar']>;
};

export type TestimonialFilterQuery = {
  author_company: InputMaybe<FilterQueryOperations>;
  author_name: InputMaybe<FilterQueryOperations>;
  author_role: InputMaybe<FilterQueryOperations>;
};

export type TestimonialItem = {
  __typename?: 'TestimonialItem';
  alternates: Maybe<Array<Maybe<Alternate>>>;
  content: Maybe<TestimonialComponent>;
  created_at: Maybe<Scalars['String']>;
  default_full_slug: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type TestimonialItems = {
  __typename?: 'TestimonialItems';
  items: Maybe<Array<Maybe<TestimonialItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String'];
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
};

export type CaseStudiesQueryVariables = Exact<{ [key: string]: never; }>;


export type CaseStudiesQuery = { __typename?: 'QueryType', CasestudyItems: { __typename?: 'CasestudyItems', items: Array<{ __typename?: 'CasestudyItem', content: { __typename?: 'CasestudyComponent', title: string, description: any, websiteUrl: { __typename?: 'Link', url: string }, featuredImage: { __typename?: 'Asset', id: number, alt: string, filename: string } } }> } };

export type FaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqsQuery = { __typename?: 'QueryType', FaqItems: { __typename?: 'FaqItems', items: Array<{ __typename?: 'FaqItem', id: number, content: { __typename?: 'FaqComponent', question: string, answer: any } }> } };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'QueryType', HomepageItem: { __typename?: 'HomepageItem', id: number, content: { __typename?: 'HomepageComponent', features: any } } };

export type SiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSettingsQuery = { __typename?: 'QueryType', SettingsItem: { __typename?: 'SettingsItem', id: number, content: { __typename?: 'SettingsComponent', name: string, slogan: string, email: string, url: { __typename?: 'Link', url: string } } } };

export type TestimonialsQueryVariables = Exact<{ [key: string]: never; }>;


export type TestimonialsQuery = { __typename?: 'QueryType', TestimonialItems: { __typename?: 'TestimonialItems', items: Array<{ __typename?: 'TestimonialItem', content: { __typename?: 'TestimonialComponent', author_name: string, author_role: string, author_company: string, testimonial: any, author_picture: { __typename?: 'Asset', filename: string, alt: string } } }> } };


export const CaseStudiesDocument = gql`
    query CaseStudies {
  CasestudyItems {
    items {
      content {
        title
        description
        websiteUrl {
          url
        }
        featuredImage {
          id
          alt
          filename
        }
      }
    }
  }
}
    `;
export const FaqsDocument = gql`
    query Faqs {
  FaqItems {
    items {
      id
      content {
        question
        answer
      }
    }
  }
}
    `;
export const HomePageDocument = gql`
    query HomePage {
  HomepageItem(id: "183831915") {
    id
    content {
      features
    }
  }
}
    `;
export const SiteSettingsDocument = gql`
    query SiteSettings {
  SettingsItem(id: "183738123") {
    id
    content {
      name
      slogan
      url {
        url
      }
      email
    }
  }
}
    `;
export const TestimonialsDocument = gql`
    query Testimonials {
  TestimonialItems {
    items {
      content {
        author_name
        author_role
        author_company
        testimonial
        author_picture {
          filename
          alt
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const CaseStudiesDocumentString = print(CaseStudiesDocument);
const FaqsDocumentString = print(FaqsDocument);
const HomePageDocumentString = print(HomePageDocument);
const SiteSettingsDocumentString = print(SiteSettingsDocument);
const TestimonialsDocumentString = print(TestimonialsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CaseStudies(variables?: CaseStudiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: CaseStudiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CaseStudiesQuery>(CaseStudiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CaseStudies', 'query');
    },
    Faqs(variables?: FaqsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: FaqsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<FaqsQuery>(FaqsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Faqs', 'query');
    },
    HomePage(variables?: HomePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: HomePageQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<HomePageQuery>(HomePageDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HomePage', 'query');
    },
    SiteSettings(variables?: SiteSettingsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: SiteSettingsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SiteSettingsQuery>(SiteSettingsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SiteSettings', 'query');
    },
    Testimonials(variables?: TestimonialsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: TestimonialsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<TestimonialsQuery>(TestimonialsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Testimonials', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;