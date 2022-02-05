export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteURL?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type StrapiUploadFile = Node & {
  strapiId?: Maybe<Scalars['Int']>;
  file?: Maybe<File>;
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  _xtypename?: Maybe<Scalars['String']>;
  data?: Maybe<StrapiProjectCoverImageData>;
  nodeId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type StrapiProjectCoverImageData = {
  _xtypename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type StrapiProject = Node & {
  strapiId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  slug: Scalars['String'];
  coverImage?: Maybe<StrapiUploadFile>;
  images?: Maybe<Array<Maybe<StrapiUploadFile>>>;
  tags?: Maybe<Array<Maybe<StrapiTag>>>;
  areas?: Maybe<Array<Maybe<StrapiArea>>>;
  organization?: Maybe<StrapiOrganization>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  _xtypename?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type StrapiTag = Node & {
  strapiId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  projects?: Maybe<Array<Maybe<StrapiProject>>>;
  areas?: Maybe<Array<Maybe<StrapiArea>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  _xtypename?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type StrapiArea = Node & {
  strapiId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<StrapiTag>>>;
  projects?: Maybe<Array<Maybe<StrapiProject>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  _xtypename?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type StrapiOrganization = Node & {
  strapiId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<StrapiProject>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  _xtypename?: Maybe<Scalars['String']>;
  data?: Maybe<StrapiProjectOrganizationData>;
  nodeId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type StrapiProjectOrganizationData = {
  _xtypename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type StrapiHome = Node & {
  strapiId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  introText: Scalars['String'];
  profile: StrapiComponentSharedProfile;
  seo?: Maybe<StrapiComponentSharedSeo>;
  areas?: Maybe<Array<Maybe<StrapiArea>>>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  _xtypename?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type StrapiComponentSharedProfile = {
  strapiId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  picture?: Maybe<StrapiUploadFile>;
  qualities: Array<Maybe<StrapiComponentSharedTextItem>>;
  _xtypename?: Maybe<Scalars['String']>;
};

export type StrapiComponentSharedSeo = {
  strapiId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  metaTitle: Scalars['String'];
  metaDescription: Scalars['String'];
  shareImage?: Maybe<StrapiUploadFile>;
};

export type StrapiComponentSharedTextItem = {
  strapiId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  text: Scalars['String'];
  _xtypename?: Maybe<Scalars['String']>;
};

export type StaticImage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
};


export type StaticImageModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageBirthtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  strapiUploadFile?: Maybe<StrapiUploadFile>;
  allStrapiUploadFile: StrapiUploadFileConnection;
  strapiProject?: Maybe<StrapiProject>;
  allStrapiProject: StrapiProjectConnection;
  strapiTag?: Maybe<StrapiTag>;
  allStrapiTag: StrapiTagConnection;
  strapiArea?: Maybe<StrapiArea>;
  allStrapiArea: StrapiAreaConnection;
  strapiOrganization?: Maybe<StrapiOrganization>;
  allStrapiOrganization: StrapiOrganizationConnection;
  strapiHome?: Maybe<StrapiHome>;
  allStrapiHome: StrapiHomeConnection;
  staticImage?: Maybe<StaticImage>;
  allStaticImage: StaticImageConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiUploadFileArgs = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  file?: InputMaybe<FileFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  formats?: InputMaybe<JsonQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  previewUrl?: InputMaybe<StringQueryOperatorInput>;
  provider?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  data?: InputMaybe<StrapiProjectCoverImageDataFilterInput>;
  nodeId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllStrapiUploadFileArgs = {
  filter?: InputMaybe<StrapiUploadFileFilterInput>;
  sort?: InputMaybe<StrapiUploadFileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiProjectArgs = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  coverImage?: InputMaybe<StrapiUploadFileFilterInput>;
  images?: InputMaybe<StrapiUploadFileFilterListInput>;
  tags?: InputMaybe<StrapiTagFilterListInput>;
  areas?: InputMaybe<StrapiAreaFilterListInput>;
  organization?: InputMaybe<StrapiOrganizationFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllStrapiProjectArgs = {
  filter?: InputMaybe<StrapiProjectFilterInput>;
  sort?: InputMaybe<StrapiProjectSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiTagArgs = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  projects?: InputMaybe<StrapiProjectFilterListInput>;
  areas?: InputMaybe<StrapiAreaFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllStrapiTagArgs = {
  filter?: InputMaybe<StrapiTagFilterInput>;
  sort?: InputMaybe<StrapiTagSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiAreaArgs = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StrapiTagFilterListInput>;
  projects?: InputMaybe<StrapiProjectFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllStrapiAreaArgs = {
  filter?: InputMaybe<StrapiAreaFilterInput>;
  sort?: InputMaybe<StrapiAreaSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiOrganizationArgs = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  projects?: InputMaybe<StrapiProjectFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  data?: InputMaybe<StrapiProjectOrganizationDataFilterInput>;
  nodeId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllStrapiOrganizationArgs = {
  filter?: InputMaybe<StrapiOrganizationFilterInput>;
  sort?: InputMaybe<StrapiOrganizationSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiHomeArgs = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  introText?: InputMaybe<StringQueryOperatorInput>;
  profile?: InputMaybe<StrapiComponentSharedProfileFilterInput>;
  seo?: InputMaybe<StrapiComponentSharedSeoFilterInput>;
  areas?: InputMaybe<StrapiAreaFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllStrapiHomeArgs = {
  filter?: InputMaybe<StrapiHomeFilterInput>;
  sort?: InputMaybe<StrapiHomeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStaticImageArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryAllStaticImageArgs = {
  filter?: InputMaybe<StaticImageFilterInput>;
  sort?: InputMaybe<StaticImageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteURL?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteURL'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiProjectCoverImageDataFilterInput = {
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiUploadFileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiUploadFileEdge>;
  nodes: Array<StrapiUploadFile>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiUploadFileGroupConnection>;
};


export type StrapiUploadFileConnectionDistinctArgs = {
  field: StrapiUploadFileFieldsEnum;
};


export type StrapiUploadFileConnectionMaxArgs = {
  field: StrapiUploadFileFieldsEnum;
};


export type StrapiUploadFileConnectionMinArgs = {
  field: StrapiUploadFileFieldsEnum;
};


export type StrapiUploadFileConnectionSumArgs = {
  field: StrapiUploadFileFieldsEnum;
};


export type StrapiUploadFileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiUploadFileFieldsEnum;
};

export type StrapiUploadFileEdge = {
  next?: Maybe<StrapiUploadFile>;
  node: StrapiUploadFile;
  previous?: Maybe<StrapiUploadFile>;
};

export type StrapiUploadFileFieldsEnum =
  | 'strapiId'
  | 'file___sourceInstanceName'
  | 'file___absolutePath'
  | 'file___relativePath'
  | 'file___extension'
  | 'file___size'
  | 'file___prettySize'
  | 'file___modifiedTime'
  | 'file___accessTime'
  | 'file___changeTime'
  | 'file___birthTime'
  | 'file___root'
  | 'file___dir'
  | 'file___base'
  | 'file___ext'
  | 'file___name'
  | 'file___relativeDirectory'
  | 'file___dev'
  | 'file___mode'
  | 'file___nlink'
  | 'file___uid'
  | 'file___gid'
  | 'file___rdev'
  | 'file___ino'
  | 'file___atimeMs'
  | 'file___mtimeMs'
  | 'file___ctimeMs'
  | 'file___atime'
  | 'file___mtime'
  | 'file___ctime'
  | 'file___birthtime'
  | 'file___birthtimeMs'
  | 'file___blksize'
  | 'file___blocks'
  | 'file___url'
  | 'file___publicURL'
  | 'file___childrenImageSharp'
  | 'file___childrenImageSharp___fixed___base64'
  | 'file___childrenImageSharp___fixed___tracedSVG'
  | 'file___childrenImageSharp___fixed___aspectRatio'
  | 'file___childrenImageSharp___fixed___width'
  | 'file___childrenImageSharp___fixed___height'
  | 'file___childrenImageSharp___fixed___src'
  | 'file___childrenImageSharp___fixed___srcSet'
  | 'file___childrenImageSharp___fixed___srcWebp'
  | 'file___childrenImageSharp___fixed___srcSetWebp'
  | 'file___childrenImageSharp___fixed___originalName'
  | 'file___childrenImageSharp___fluid___base64'
  | 'file___childrenImageSharp___fluid___tracedSVG'
  | 'file___childrenImageSharp___fluid___aspectRatio'
  | 'file___childrenImageSharp___fluid___src'
  | 'file___childrenImageSharp___fluid___srcSet'
  | 'file___childrenImageSharp___fluid___srcWebp'
  | 'file___childrenImageSharp___fluid___srcSetWebp'
  | 'file___childrenImageSharp___fluid___sizes'
  | 'file___childrenImageSharp___fluid___originalImg'
  | 'file___childrenImageSharp___fluid___originalName'
  | 'file___childrenImageSharp___fluid___presentationWidth'
  | 'file___childrenImageSharp___fluid___presentationHeight'
  | 'file___childrenImageSharp___gatsbyImageData'
  | 'file___childrenImageSharp___original___width'
  | 'file___childrenImageSharp___original___height'
  | 'file___childrenImageSharp___original___src'
  | 'file___childrenImageSharp___resize___src'
  | 'file___childrenImageSharp___resize___tracedSVG'
  | 'file___childrenImageSharp___resize___width'
  | 'file___childrenImageSharp___resize___height'
  | 'file___childrenImageSharp___resize___aspectRatio'
  | 'file___childrenImageSharp___resize___originalName'
  | 'file___childrenImageSharp___id'
  | 'file___childrenImageSharp___parent___id'
  | 'file___childrenImageSharp___parent___children'
  | 'file___childrenImageSharp___children'
  | 'file___childrenImageSharp___children___id'
  | 'file___childrenImageSharp___children___children'
  | 'file___childrenImageSharp___internal___content'
  | 'file___childrenImageSharp___internal___contentDigest'
  | 'file___childrenImageSharp___internal___description'
  | 'file___childrenImageSharp___internal___fieldOwners'
  | 'file___childrenImageSharp___internal___ignoreType'
  | 'file___childrenImageSharp___internal___mediaType'
  | 'file___childrenImageSharp___internal___owner'
  | 'file___childrenImageSharp___internal___type'
  | 'file___childImageSharp___fixed___base64'
  | 'file___childImageSharp___fixed___tracedSVG'
  | 'file___childImageSharp___fixed___aspectRatio'
  | 'file___childImageSharp___fixed___width'
  | 'file___childImageSharp___fixed___height'
  | 'file___childImageSharp___fixed___src'
  | 'file___childImageSharp___fixed___srcSet'
  | 'file___childImageSharp___fixed___srcWebp'
  | 'file___childImageSharp___fixed___srcSetWebp'
  | 'file___childImageSharp___fixed___originalName'
  | 'file___childImageSharp___fluid___base64'
  | 'file___childImageSharp___fluid___tracedSVG'
  | 'file___childImageSharp___fluid___aspectRatio'
  | 'file___childImageSharp___fluid___src'
  | 'file___childImageSharp___fluid___srcSet'
  | 'file___childImageSharp___fluid___srcWebp'
  | 'file___childImageSharp___fluid___srcSetWebp'
  | 'file___childImageSharp___fluid___sizes'
  | 'file___childImageSharp___fluid___originalImg'
  | 'file___childImageSharp___fluid___originalName'
  | 'file___childImageSharp___fluid___presentationWidth'
  | 'file___childImageSharp___fluid___presentationHeight'
  | 'file___childImageSharp___gatsbyImageData'
  | 'file___childImageSharp___original___width'
  | 'file___childImageSharp___original___height'
  | 'file___childImageSharp___original___src'
  | 'file___childImageSharp___resize___src'
  | 'file___childImageSharp___resize___tracedSVG'
  | 'file___childImageSharp___resize___width'
  | 'file___childImageSharp___resize___height'
  | 'file___childImageSharp___resize___aspectRatio'
  | 'file___childImageSharp___resize___originalName'
  | 'file___childImageSharp___id'
  | 'file___childImageSharp___parent___id'
  | 'file___childImageSharp___parent___children'
  | 'file___childImageSharp___children'
  | 'file___childImageSharp___children___id'
  | 'file___childImageSharp___children___children'
  | 'file___childImageSharp___internal___content'
  | 'file___childImageSharp___internal___contentDigest'
  | 'file___childImageSharp___internal___description'
  | 'file___childImageSharp___internal___fieldOwners'
  | 'file___childImageSharp___internal___ignoreType'
  | 'file___childImageSharp___internal___mediaType'
  | 'file___childImageSharp___internal___owner'
  | 'file___childImageSharp___internal___type'
  | 'file___id'
  | 'file___parent___id'
  | 'file___parent___parent___id'
  | 'file___parent___parent___children'
  | 'file___parent___children'
  | 'file___parent___children___id'
  | 'file___parent___children___children'
  | 'file___parent___internal___content'
  | 'file___parent___internal___contentDigest'
  | 'file___parent___internal___description'
  | 'file___parent___internal___fieldOwners'
  | 'file___parent___internal___ignoreType'
  | 'file___parent___internal___mediaType'
  | 'file___parent___internal___owner'
  | 'file___parent___internal___type'
  | 'file___children'
  | 'file___children___id'
  | 'file___children___parent___id'
  | 'file___children___parent___children'
  | 'file___children___children'
  | 'file___children___children___id'
  | 'file___children___children___children'
  | 'file___children___internal___content'
  | 'file___children___internal___contentDigest'
  | 'file___children___internal___description'
  | 'file___children___internal___fieldOwners'
  | 'file___children___internal___ignoreType'
  | 'file___children___internal___mediaType'
  | 'file___children___internal___owner'
  | 'file___children___internal___type'
  | 'file___internal___content'
  | 'file___internal___contentDigest'
  | 'file___internal___description'
  | 'file___internal___fieldOwners'
  | 'file___internal___ignoreType'
  | 'file___internal___mediaType'
  | 'file___internal___owner'
  | 'file___internal___type'
  | 'name'
  | 'alternativeText'
  | 'caption'
  | 'width'
  | 'height'
  | 'formats'
  | 'hash'
  | 'ext'
  | 'mime'
  | 'size'
  | 'url'
  | 'previewUrl'
  | 'provider'
  | 'provider_metadata'
  | 'createdAt'
  | 'updatedAt'
  | '_xtypename'
  | 'data____xtypename'
  | 'data___id'
  | 'nodeId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type StrapiUploadFileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiUploadFileEdge>;
  nodes: Array<StrapiUploadFile>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiUploadFileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiUploadFileGroupConnectionDistinctArgs = {
  field: StrapiUploadFileFieldsEnum;
};


export type StrapiUploadFileGroupConnectionMaxArgs = {
  field: StrapiUploadFileFieldsEnum;
};


export type StrapiUploadFileGroupConnectionMinArgs = {
  field: StrapiUploadFileFieldsEnum;
};


export type StrapiUploadFileGroupConnectionSumArgs = {
  field: StrapiUploadFileFieldsEnum;
};


export type StrapiUploadFileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiUploadFileFieldsEnum;
};

export type StrapiUploadFileFilterInput = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  file?: InputMaybe<FileFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  formats?: InputMaybe<JsonQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  previewUrl?: InputMaybe<StringQueryOperatorInput>;
  provider?: InputMaybe<StringQueryOperatorInput>;
  provider_metadata?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  data?: InputMaybe<StrapiProjectCoverImageDataFilterInput>;
  nodeId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type StrapiUploadFileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiUploadFileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiUploadFileFilterListInput = {
  elemMatch?: InputMaybe<StrapiUploadFileFilterInput>;
};

export type StrapiTagFilterListInput = {
  elemMatch?: InputMaybe<StrapiTagFilterInput>;
};

export type StrapiTagFilterInput = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  projects?: InputMaybe<StrapiProjectFilterListInput>;
  areas?: InputMaybe<StrapiAreaFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type StrapiProjectFilterListInput = {
  elemMatch?: InputMaybe<StrapiProjectFilterInput>;
};

export type StrapiProjectFilterInput = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  coverImage?: InputMaybe<StrapiUploadFileFilterInput>;
  images?: InputMaybe<StrapiUploadFileFilterListInput>;
  tags?: InputMaybe<StrapiTagFilterListInput>;
  areas?: InputMaybe<StrapiAreaFilterListInput>;
  organization?: InputMaybe<StrapiOrganizationFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type StrapiAreaFilterListInput = {
  elemMatch?: InputMaybe<StrapiAreaFilterInput>;
};

export type StrapiAreaFilterInput = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StrapiTagFilterListInput>;
  projects?: InputMaybe<StrapiProjectFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type StrapiOrganizationFilterInput = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  projects?: InputMaybe<StrapiProjectFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  data?: InputMaybe<StrapiProjectOrganizationDataFilterInput>;
  nodeId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type StrapiProjectOrganizationDataFilterInput = {
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiProjectConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiProjectEdge>;
  nodes: Array<StrapiProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiProjectGroupConnection>;
};


export type StrapiProjectConnectionDistinctArgs = {
  field: StrapiProjectFieldsEnum;
};


export type StrapiProjectConnectionMaxArgs = {
  field: StrapiProjectFieldsEnum;
};


export type StrapiProjectConnectionMinArgs = {
  field: StrapiProjectFieldsEnum;
};


export type StrapiProjectConnectionSumArgs = {
  field: StrapiProjectFieldsEnum;
};


export type StrapiProjectConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiProjectFieldsEnum;
};

export type StrapiProjectEdge = {
  next?: Maybe<StrapiProject>;
  node: StrapiProject;
  previous?: Maybe<StrapiProject>;
};

export type StrapiProjectFieldsEnum =
  | 'strapiId'
  | 'title'
  | 'name'
  | 'description'
  | 'slug'
  | 'coverImage___strapiId'
  | 'coverImage___file___sourceInstanceName'
  | 'coverImage___file___absolutePath'
  | 'coverImage___file___relativePath'
  | 'coverImage___file___extension'
  | 'coverImage___file___size'
  | 'coverImage___file___prettySize'
  | 'coverImage___file___modifiedTime'
  | 'coverImage___file___accessTime'
  | 'coverImage___file___changeTime'
  | 'coverImage___file___birthTime'
  | 'coverImage___file___root'
  | 'coverImage___file___dir'
  | 'coverImage___file___base'
  | 'coverImage___file___ext'
  | 'coverImage___file___name'
  | 'coverImage___file___relativeDirectory'
  | 'coverImage___file___dev'
  | 'coverImage___file___mode'
  | 'coverImage___file___nlink'
  | 'coverImage___file___uid'
  | 'coverImage___file___gid'
  | 'coverImage___file___rdev'
  | 'coverImage___file___ino'
  | 'coverImage___file___atimeMs'
  | 'coverImage___file___mtimeMs'
  | 'coverImage___file___ctimeMs'
  | 'coverImage___file___atime'
  | 'coverImage___file___mtime'
  | 'coverImage___file___ctime'
  | 'coverImage___file___birthtime'
  | 'coverImage___file___birthtimeMs'
  | 'coverImage___file___blksize'
  | 'coverImage___file___blocks'
  | 'coverImage___file___url'
  | 'coverImage___file___publicURL'
  | 'coverImage___file___childrenImageSharp'
  | 'coverImage___file___childrenImageSharp___gatsbyImageData'
  | 'coverImage___file___childrenImageSharp___id'
  | 'coverImage___file___childrenImageSharp___children'
  | 'coverImage___file___childImageSharp___gatsbyImageData'
  | 'coverImage___file___childImageSharp___id'
  | 'coverImage___file___childImageSharp___children'
  | 'coverImage___file___id'
  | 'coverImage___file___parent___id'
  | 'coverImage___file___parent___children'
  | 'coverImage___file___children'
  | 'coverImage___file___children___id'
  | 'coverImage___file___children___children'
  | 'coverImage___file___internal___content'
  | 'coverImage___file___internal___contentDigest'
  | 'coverImage___file___internal___description'
  | 'coverImage___file___internal___fieldOwners'
  | 'coverImage___file___internal___ignoreType'
  | 'coverImage___file___internal___mediaType'
  | 'coverImage___file___internal___owner'
  | 'coverImage___file___internal___type'
  | 'coverImage___name'
  | 'coverImage___alternativeText'
  | 'coverImage___caption'
  | 'coverImage___width'
  | 'coverImage___height'
  | 'coverImage___formats'
  | 'coverImage___hash'
  | 'coverImage___ext'
  | 'coverImage___mime'
  | 'coverImage___size'
  | 'coverImage___url'
  | 'coverImage___previewUrl'
  | 'coverImage___provider'
  | 'coverImage___provider_metadata'
  | 'coverImage___createdAt'
  | 'coverImage___updatedAt'
  | 'coverImage____xtypename'
  | 'coverImage___data____xtypename'
  | 'coverImage___data___id'
  | 'coverImage___nodeId'
  | 'coverImage___id'
  | 'coverImage___parent___id'
  | 'coverImage___parent___parent___id'
  | 'coverImage___parent___parent___children'
  | 'coverImage___parent___children'
  | 'coverImage___parent___children___id'
  | 'coverImage___parent___children___children'
  | 'coverImage___parent___internal___content'
  | 'coverImage___parent___internal___contentDigest'
  | 'coverImage___parent___internal___description'
  | 'coverImage___parent___internal___fieldOwners'
  | 'coverImage___parent___internal___ignoreType'
  | 'coverImage___parent___internal___mediaType'
  | 'coverImage___parent___internal___owner'
  | 'coverImage___parent___internal___type'
  | 'coverImage___children'
  | 'coverImage___children___id'
  | 'coverImage___children___parent___id'
  | 'coverImage___children___parent___children'
  | 'coverImage___children___children'
  | 'coverImage___children___children___id'
  | 'coverImage___children___children___children'
  | 'coverImage___children___internal___content'
  | 'coverImage___children___internal___contentDigest'
  | 'coverImage___children___internal___description'
  | 'coverImage___children___internal___fieldOwners'
  | 'coverImage___children___internal___ignoreType'
  | 'coverImage___children___internal___mediaType'
  | 'coverImage___children___internal___owner'
  | 'coverImage___children___internal___type'
  | 'coverImage___internal___content'
  | 'coverImage___internal___contentDigest'
  | 'coverImage___internal___description'
  | 'coverImage___internal___fieldOwners'
  | 'coverImage___internal___ignoreType'
  | 'coverImage___internal___mediaType'
  | 'coverImage___internal___owner'
  | 'coverImage___internal___type'
  | 'images'
  | 'images___strapiId'
  | 'images___file___sourceInstanceName'
  | 'images___file___absolutePath'
  | 'images___file___relativePath'
  | 'images___file___extension'
  | 'images___file___size'
  | 'images___file___prettySize'
  | 'images___file___modifiedTime'
  | 'images___file___accessTime'
  | 'images___file___changeTime'
  | 'images___file___birthTime'
  | 'images___file___root'
  | 'images___file___dir'
  | 'images___file___base'
  | 'images___file___ext'
  | 'images___file___name'
  | 'images___file___relativeDirectory'
  | 'images___file___dev'
  | 'images___file___mode'
  | 'images___file___nlink'
  | 'images___file___uid'
  | 'images___file___gid'
  | 'images___file___rdev'
  | 'images___file___ino'
  | 'images___file___atimeMs'
  | 'images___file___mtimeMs'
  | 'images___file___ctimeMs'
  | 'images___file___atime'
  | 'images___file___mtime'
  | 'images___file___ctime'
  | 'images___file___birthtime'
  | 'images___file___birthtimeMs'
  | 'images___file___blksize'
  | 'images___file___blocks'
  | 'images___file___url'
  | 'images___file___publicURL'
  | 'images___file___childrenImageSharp'
  | 'images___file___childrenImageSharp___gatsbyImageData'
  | 'images___file___childrenImageSharp___id'
  | 'images___file___childrenImageSharp___children'
  | 'images___file___childImageSharp___gatsbyImageData'
  | 'images___file___childImageSharp___id'
  | 'images___file___childImageSharp___children'
  | 'images___file___id'
  | 'images___file___parent___id'
  | 'images___file___parent___children'
  | 'images___file___children'
  | 'images___file___children___id'
  | 'images___file___children___children'
  | 'images___file___internal___content'
  | 'images___file___internal___contentDigest'
  | 'images___file___internal___description'
  | 'images___file___internal___fieldOwners'
  | 'images___file___internal___ignoreType'
  | 'images___file___internal___mediaType'
  | 'images___file___internal___owner'
  | 'images___file___internal___type'
  | 'images___name'
  | 'images___alternativeText'
  | 'images___caption'
  | 'images___width'
  | 'images___height'
  | 'images___formats'
  | 'images___hash'
  | 'images___ext'
  | 'images___mime'
  | 'images___size'
  | 'images___url'
  | 'images___previewUrl'
  | 'images___provider'
  | 'images___provider_metadata'
  | 'images___createdAt'
  | 'images___updatedAt'
  | 'images____xtypename'
  | 'images___data____xtypename'
  | 'images___data___id'
  | 'images___nodeId'
  | 'images___id'
  | 'images___parent___id'
  | 'images___parent___parent___id'
  | 'images___parent___parent___children'
  | 'images___parent___children'
  | 'images___parent___children___id'
  | 'images___parent___children___children'
  | 'images___parent___internal___content'
  | 'images___parent___internal___contentDigest'
  | 'images___parent___internal___description'
  | 'images___parent___internal___fieldOwners'
  | 'images___parent___internal___ignoreType'
  | 'images___parent___internal___mediaType'
  | 'images___parent___internal___owner'
  | 'images___parent___internal___type'
  | 'images___children'
  | 'images___children___id'
  | 'images___children___parent___id'
  | 'images___children___parent___children'
  | 'images___children___children'
  | 'images___children___children___id'
  | 'images___children___children___children'
  | 'images___children___internal___content'
  | 'images___children___internal___contentDigest'
  | 'images___children___internal___description'
  | 'images___children___internal___fieldOwners'
  | 'images___children___internal___ignoreType'
  | 'images___children___internal___mediaType'
  | 'images___children___internal___owner'
  | 'images___children___internal___type'
  | 'images___internal___content'
  | 'images___internal___contentDigest'
  | 'images___internal___description'
  | 'images___internal___fieldOwners'
  | 'images___internal___ignoreType'
  | 'images___internal___mediaType'
  | 'images___internal___owner'
  | 'images___internal___type'
  | 'tags'
  | 'tags___strapiId'
  | 'tags___name'
  | 'tags___projects'
  | 'tags___projects___strapiId'
  | 'tags___projects___title'
  | 'tags___projects___name'
  | 'tags___projects___description'
  | 'tags___projects___slug'
  | 'tags___projects___coverImage___strapiId'
  | 'tags___projects___coverImage___name'
  | 'tags___projects___coverImage___alternativeText'
  | 'tags___projects___coverImage___caption'
  | 'tags___projects___coverImage___width'
  | 'tags___projects___coverImage___height'
  | 'tags___projects___coverImage___formats'
  | 'tags___projects___coverImage___hash'
  | 'tags___projects___coverImage___ext'
  | 'tags___projects___coverImage___mime'
  | 'tags___projects___coverImage___size'
  | 'tags___projects___coverImage___url'
  | 'tags___projects___coverImage___previewUrl'
  | 'tags___projects___coverImage___provider'
  | 'tags___projects___coverImage___provider_metadata'
  | 'tags___projects___coverImage___createdAt'
  | 'tags___projects___coverImage___updatedAt'
  | 'tags___projects___coverImage____xtypename'
  | 'tags___projects___coverImage___nodeId'
  | 'tags___projects___coverImage___id'
  | 'tags___projects___coverImage___children'
  | 'tags___projects___images'
  | 'tags___projects___images___strapiId'
  | 'tags___projects___images___name'
  | 'tags___projects___images___alternativeText'
  | 'tags___projects___images___caption'
  | 'tags___projects___images___width'
  | 'tags___projects___images___height'
  | 'tags___projects___images___formats'
  | 'tags___projects___images___hash'
  | 'tags___projects___images___ext'
  | 'tags___projects___images___mime'
  | 'tags___projects___images___size'
  | 'tags___projects___images___url'
  | 'tags___projects___images___previewUrl'
  | 'tags___projects___images___provider'
  | 'tags___projects___images___provider_metadata'
  | 'tags___projects___images___createdAt'
  | 'tags___projects___images___updatedAt'
  | 'tags___projects___images____xtypename'
  | 'tags___projects___images___nodeId'
  | 'tags___projects___images___id'
  | 'tags___projects___images___children'
  | 'tags___projects___tags'
  | 'tags___projects___tags___strapiId'
  | 'tags___projects___tags___name'
  | 'tags___projects___tags___projects'
  | 'tags___projects___tags___areas'
  | 'tags___projects___tags___createdAt'
  | 'tags___projects___tags___updatedAt'
  | 'tags___projects___tags___publishedAt'
  | 'tags___projects___tags____xtypename'
  | 'tags___projects___tags___id'
  | 'tags___projects___tags___children'
  | 'tags___projects___areas'
  | 'tags___projects___areas___strapiId'
  | 'tags___projects___areas___name'
  | 'tags___projects___areas___description'
  | 'tags___projects___areas___color'
  | 'tags___projects___areas___slug'
  | 'tags___projects___areas___tags'
  | 'tags___projects___areas___projects'
  | 'tags___projects___areas___createdAt'
  | 'tags___projects___areas___updatedAt'
  | 'tags___projects___areas___publishedAt'
  | 'tags___projects___areas____xtypename'
  | 'tags___projects___areas___id'
  | 'tags___projects___areas___children'
  | 'tags___projects___organization___strapiId'
  | 'tags___projects___organization___name'
  | 'tags___projects___organization___link'
  | 'tags___projects___organization___projects'
  | 'tags___projects___organization___createdAt'
  | 'tags___projects___organization___updatedAt'
  | 'tags___projects___organization___publishedAt'
  | 'tags___projects___organization____xtypename'
  | 'tags___projects___organization___nodeId'
  | 'tags___projects___organization___id'
  | 'tags___projects___organization___children'
  | 'tags___projects___createdAt'
  | 'tags___projects___updatedAt'
  | 'tags___projects___publishedAt'
  | 'tags___projects____xtypename'
  | 'tags___projects___id'
  | 'tags___projects___parent___id'
  | 'tags___projects___parent___children'
  | 'tags___projects___children'
  | 'tags___projects___children___id'
  | 'tags___projects___children___children'
  | 'tags___projects___internal___content'
  | 'tags___projects___internal___contentDigest'
  | 'tags___projects___internal___description'
  | 'tags___projects___internal___fieldOwners'
  | 'tags___projects___internal___ignoreType'
  | 'tags___projects___internal___mediaType'
  | 'tags___projects___internal___owner'
  | 'tags___projects___internal___type'
  | 'tags___areas'
  | 'tags___areas___strapiId'
  | 'tags___areas___name'
  | 'tags___areas___description'
  | 'tags___areas___color'
  | 'tags___areas___slug'
  | 'tags___areas___tags'
  | 'tags___areas___tags___strapiId'
  | 'tags___areas___tags___name'
  | 'tags___areas___tags___projects'
  | 'tags___areas___tags___areas'
  | 'tags___areas___tags___createdAt'
  | 'tags___areas___tags___updatedAt'
  | 'tags___areas___tags___publishedAt'
  | 'tags___areas___tags____xtypename'
  | 'tags___areas___tags___id'
  | 'tags___areas___tags___children'
  | 'tags___areas___projects'
  | 'tags___areas___projects___strapiId'
  | 'tags___areas___projects___title'
  | 'tags___areas___projects___name'
  | 'tags___areas___projects___description'
  | 'tags___areas___projects___slug'
  | 'tags___areas___projects___images'
  | 'tags___areas___projects___tags'
  | 'tags___areas___projects___areas'
  | 'tags___areas___projects___createdAt'
  | 'tags___areas___projects___updatedAt'
  | 'tags___areas___projects___publishedAt'
  | 'tags___areas___projects____xtypename'
  | 'tags___areas___projects___id'
  | 'tags___areas___projects___children'
  | 'tags___areas___createdAt'
  | 'tags___areas___updatedAt'
  | 'tags___areas___publishedAt'
  | 'tags___areas____xtypename'
  | 'tags___areas___id'
  | 'tags___areas___parent___id'
  | 'tags___areas___parent___children'
  | 'tags___areas___children'
  | 'tags___areas___children___id'
  | 'tags___areas___children___children'
  | 'tags___areas___internal___content'
  | 'tags___areas___internal___contentDigest'
  | 'tags___areas___internal___description'
  | 'tags___areas___internal___fieldOwners'
  | 'tags___areas___internal___ignoreType'
  | 'tags___areas___internal___mediaType'
  | 'tags___areas___internal___owner'
  | 'tags___areas___internal___type'
  | 'tags___createdAt'
  | 'tags___updatedAt'
  | 'tags___publishedAt'
  | 'tags____xtypename'
  | 'tags___id'
  | 'tags___parent___id'
  | 'tags___parent___parent___id'
  | 'tags___parent___parent___children'
  | 'tags___parent___children'
  | 'tags___parent___children___id'
  | 'tags___parent___children___children'
  | 'tags___parent___internal___content'
  | 'tags___parent___internal___contentDigest'
  | 'tags___parent___internal___description'
  | 'tags___parent___internal___fieldOwners'
  | 'tags___parent___internal___ignoreType'
  | 'tags___parent___internal___mediaType'
  | 'tags___parent___internal___owner'
  | 'tags___parent___internal___type'
  | 'tags___children'
  | 'tags___children___id'
  | 'tags___children___parent___id'
  | 'tags___children___parent___children'
  | 'tags___children___children'
  | 'tags___children___children___id'
  | 'tags___children___children___children'
  | 'tags___children___internal___content'
  | 'tags___children___internal___contentDigest'
  | 'tags___children___internal___description'
  | 'tags___children___internal___fieldOwners'
  | 'tags___children___internal___ignoreType'
  | 'tags___children___internal___mediaType'
  | 'tags___children___internal___owner'
  | 'tags___children___internal___type'
  | 'tags___internal___content'
  | 'tags___internal___contentDigest'
  | 'tags___internal___description'
  | 'tags___internal___fieldOwners'
  | 'tags___internal___ignoreType'
  | 'tags___internal___mediaType'
  | 'tags___internal___owner'
  | 'tags___internal___type'
  | 'areas'
  | 'areas___strapiId'
  | 'areas___name'
  | 'areas___description'
  | 'areas___color'
  | 'areas___slug'
  | 'areas___tags'
  | 'areas___tags___strapiId'
  | 'areas___tags___name'
  | 'areas___tags___projects'
  | 'areas___tags___projects___strapiId'
  | 'areas___tags___projects___title'
  | 'areas___tags___projects___name'
  | 'areas___tags___projects___description'
  | 'areas___tags___projects___slug'
  | 'areas___tags___projects___images'
  | 'areas___tags___projects___tags'
  | 'areas___tags___projects___areas'
  | 'areas___tags___projects___createdAt'
  | 'areas___tags___projects___updatedAt'
  | 'areas___tags___projects___publishedAt'
  | 'areas___tags___projects____xtypename'
  | 'areas___tags___projects___id'
  | 'areas___tags___projects___children'
  | 'areas___tags___areas'
  | 'areas___tags___areas___strapiId'
  | 'areas___tags___areas___name'
  | 'areas___tags___areas___description'
  | 'areas___tags___areas___color'
  | 'areas___tags___areas___slug'
  | 'areas___tags___areas___tags'
  | 'areas___tags___areas___projects'
  | 'areas___tags___areas___createdAt'
  | 'areas___tags___areas___updatedAt'
  | 'areas___tags___areas___publishedAt'
  | 'areas___tags___areas____xtypename'
  | 'areas___tags___areas___id'
  | 'areas___tags___areas___children'
  | 'areas___tags___createdAt'
  | 'areas___tags___updatedAt'
  | 'areas___tags___publishedAt'
  | 'areas___tags____xtypename'
  | 'areas___tags___id'
  | 'areas___tags___parent___id'
  | 'areas___tags___parent___children'
  | 'areas___tags___children'
  | 'areas___tags___children___id'
  | 'areas___tags___children___children'
  | 'areas___tags___internal___content'
  | 'areas___tags___internal___contentDigest'
  | 'areas___tags___internal___description'
  | 'areas___tags___internal___fieldOwners'
  | 'areas___tags___internal___ignoreType'
  | 'areas___tags___internal___mediaType'
  | 'areas___tags___internal___owner'
  | 'areas___tags___internal___type'
  | 'areas___projects'
  | 'areas___projects___strapiId'
  | 'areas___projects___title'
  | 'areas___projects___name'
  | 'areas___projects___description'
  | 'areas___projects___slug'
  | 'areas___projects___coverImage___strapiId'
  | 'areas___projects___coverImage___name'
  | 'areas___projects___coverImage___alternativeText'
  | 'areas___projects___coverImage___caption'
  | 'areas___projects___coverImage___width'
  | 'areas___projects___coverImage___height'
  | 'areas___projects___coverImage___formats'
  | 'areas___projects___coverImage___hash'
  | 'areas___projects___coverImage___ext'
  | 'areas___projects___coverImage___mime'
  | 'areas___projects___coverImage___size'
  | 'areas___projects___coverImage___url'
  | 'areas___projects___coverImage___previewUrl'
  | 'areas___projects___coverImage___provider'
  | 'areas___projects___coverImage___provider_metadata'
  | 'areas___projects___coverImage___createdAt'
  | 'areas___projects___coverImage___updatedAt'
  | 'areas___projects___coverImage____xtypename'
  | 'areas___projects___coverImage___nodeId'
  | 'areas___projects___coverImage___id'
  | 'areas___projects___coverImage___children'
  | 'areas___projects___images'
  | 'areas___projects___images___strapiId'
  | 'areas___projects___images___name'
  | 'areas___projects___images___alternativeText'
  | 'areas___projects___images___caption'
  | 'areas___projects___images___width'
  | 'areas___projects___images___height'
  | 'areas___projects___images___formats'
  | 'areas___projects___images___hash'
  | 'areas___projects___images___ext'
  | 'areas___projects___images___mime'
  | 'areas___projects___images___size'
  | 'areas___projects___images___url'
  | 'areas___projects___images___previewUrl'
  | 'areas___projects___images___provider'
  | 'areas___projects___images___provider_metadata'
  | 'areas___projects___images___createdAt'
  | 'areas___projects___images___updatedAt'
  | 'areas___projects___images____xtypename'
  | 'areas___projects___images___nodeId'
  | 'areas___projects___images___id'
  | 'areas___projects___images___children'
  | 'areas___projects___tags'
  | 'areas___projects___tags___strapiId'
  | 'areas___projects___tags___name'
  | 'areas___projects___tags___projects'
  | 'areas___projects___tags___areas'
  | 'areas___projects___tags___createdAt'
  | 'areas___projects___tags___updatedAt'
  | 'areas___projects___tags___publishedAt'
  | 'areas___projects___tags____xtypename'
  | 'areas___projects___tags___id'
  | 'areas___projects___tags___children'
  | 'areas___projects___areas'
  | 'areas___projects___areas___strapiId'
  | 'areas___projects___areas___name'
  | 'areas___projects___areas___description'
  | 'areas___projects___areas___color'
  | 'areas___projects___areas___slug'
  | 'areas___projects___areas___tags'
  | 'areas___projects___areas___projects'
  | 'areas___projects___areas___createdAt'
  | 'areas___projects___areas___updatedAt'
  | 'areas___projects___areas___publishedAt'
  | 'areas___projects___areas____xtypename'
  | 'areas___projects___areas___id'
  | 'areas___projects___areas___children'
  | 'areas___projects___organization___strapiId'
  | 'areas___projects___organization___name'
  | 'areas___projects___organization___link'
  | 'areas___projects___organization___projects'
  | 'areas___projects___organization___createdAt'
  | 'areas___projects___organization___updatedAt'
  | 'areas___projects___organization___publishedAt'
  | 'areas___projects___organization____xtypename'
  | 'areas___projects___organization___nodeId'
  | 'areas___projects___organization___id'
  | 'areas___projects___organization___children'
  | 'areas___projects___createdAt'
  | 'areas___projects___updatedAt'
  | 'areas___projects___publishedAt'
  | 'areas___projects____xtypename'
  | 'areas___projects___id'
  | 'areas___projects___parent___id'
  | 'areas___projects___parent___children'
  | 'areas___projects___children'
  | 'areas___projects___children___id'
  | 'areas___projects___children___children'
  | 'areas___projects___internal___content'
  | 'areas___projects___internal___contentDigest'
  | 'areas___projects___internal___description'
  | 'areas___projects___internal___fieldOwners'
  | 'areas___projects___internal___ignoreType'
  | 'areas___projects___internal___mediaType'
  | 'areas___projects___internal___owner'
  | 'areas___projects___internal___type'
  | 'areas___createdAt'
  | 'areas___updatedAt'
  | 'areas___publishedAt'
  | 'areas____xtypename'
  | 'areas___id'
  | 'areas___parent___id'
  | 'areas___parent___parent___id'
  | 'areas___parent___parent___children'
  | 'areas___parent___children'
  | 'areas___parent___children___id'
  | 'areas___parent___children___children'
  | 'areas___parent___internal___content'
  | 'areas___parent___internal___contentDigest'
  | 'areas___parent___internal___description'
  | 'areas___parent___internal___fieldOwners'
  | 'areas___parent___internal___ignoreType'
  | 'areas___parent___internal___mediaType'
  | 'areas___parent___internal___owner'
  | 'areas___parent___internal___type'
  | 'areas___children'
  | 'areas___children___id'
  | 'areas___children___parent___id'
  | 'areas___children___parent___children'
  | 'areas___children___children'
  | 'areas___children___children___id'
  | 'areas___children___children___children'
  | 'areas___children___internal___content'
  | 'areas___children___internal___contentDigest'
  | 'areas___children___internal___description'
  | 'areas___children___internal___fieldOwners'
  | 'areas___children___internal___ignoreType'
  | 'areas___children___internal___mediaType'
  | 'areas___children___internal___owner'
  | 'areas___children___internal___type'
  | 'areas___internal___content'
  | 'areas___internal___contentDigest'
  | 'areas___internal___description'
  | 'areas___internal___fieldOwners'
  | 'areas___internal___ignoreType'
  | 'areas___internal___mediaType'
  | 'areas___internal___owner'
  | 'areas___internal___type'
  | 'organization___strapiId'
  | 'organization___name'
  | 'organization___link'
  | 'organization___projects'
  | 'organization___projects___strapiId'
  | 'organization___projects___title'
  | 'organization___projects___name'
  | 'organization___projects___description'
  | 'organization___projects___slug'
  | 'organization___projects___coverImage___strapiId'
  | 'organization___projects___coverImage___name'
  | 'organization___projects___coverImage___alternativeText'
  | 'organization___projects___coverImage___caption'
  | 'organization___projects___coverImage___width'
  | 'organization___projects___coverImage___height'
  | 'organization___projects___coverImage___formats'
  | 'organization___projects___coverImage___hash'
  | 'organization___projects___coverImage___ext'
  | 'organization___projects___coverImage___mime'
  | 'organization___projects___coverImage___size'
  | 'organization___projects___coverImage___url'
  | 'organization___projects___coverImage___previewUrl'
  | 'organization___projects___coverImage___provider'
  | 'organization___projects___coverImage___provider_metadata'
  | 'organization___projects___coverImage___createdAt'
  | 'organization___projects___coverImage___updatedAt'
  | 'organization___projects___coverImage____xtypename'
  | 'organization___projects___coverImage___nodeId'
  | 'organization___projects___coverImage___id'
  | 'organization___projects___coverImage___children'
  | 'organization___projects___images'
  | 'organization___projects___images___strapiId'
  | 'organization___projects___images___name'
  | 'organization___projects___images___alternativeText'
  | 'organization___projects___images___caption'
  | 'organization___projects___images___width'
  | 'organization___projects___images___height'
  | 'organization___projects___images___formats'
  | 'organization___projects___images___hash'
  | 'organization___projects___images___ext'
  | 'organization___projects___images___mime'
  | 'organization___projects___images___size'
  | 'organization___projects___images___url'
  | 'organization___projects___images___previewUrl'
  | 'organization___projects___images___provider'
  | 'organization___projects___images___provider_metadata'
  | 'organization___projects___images___createdAt'
  | 'organization___projects___images___updatedAt'
  | 'organization___projects___images____xtypename'
  | 'organization___projects___images___nodeId'
  | 'organization___projects___images___id'
  | 'organization___projects___images___children'
  | 'organization___projects___tags'
  | 'organization___projects___tags___strapiId'
  | 'organization___projects___tags___name'
  | 'organization___projects___tags___projects'
  | 'organization___projects___tags___areas'
  | 'organization___projects___tags___createdAt'
  | 'organization___projects___tags___updatedAt'
  | 'organization___projects___tags___publishedAt'
  | 'organization___projects___tags____xtypename'
  | 'organization___projects___tags___id'
  | 'organization___projects___tags___children'
  | 'organization___projects___areas'
  | 'organization___projects___areas___strapiId'
  | 'organization___projects___areas___name'
  | 'organization___projects___areas___description'
  | 'organization___projects___areas___color'
  | 'organization___projects___areas___slug'
  | 'organization___projects___areas___tags'
  | 'organization___projects___areas___projects'
  | 'organization___projects___areas___createdAt'
  | 'organization___projects___areas___updatedAt'
  | 'organization___projects___areas___publishedAt'
  | 'organization___projects___areas____xtypename'
  | 'organization___projects___areas___id'
  | 'organization___projects___areas___children'
  | 'organization___projects___organization___strapiId'
  | 'organization___projects___organization___name'
  | 'organization___projects___organization___link'
  | 'organization___projects___organization___projects'
  | 'organization___projects___organization___createdAt'
  | 'organization___projects___organization___updatedAt'
  | 'organization___projects___organization___publishedAt'
  | 'organization___projects___organization____xtypename'
  | 'organization___projects___organization___nodeId'
  | 'organization___projects___organization___id'
  | 'organization___projects___organization___children'
  | 'organization___projects___createdAt'
  | 'organization___projects___updatedAt'
  | 'organization___projects___publishedAt'
  | 'organization___projects____xtypename'
  | 'organization___projects___id'
  | 'organization___projects___parent___id'
  | 'organization___projects___parent___children'
  | 'organization___projects___children'
  | 'organization___projects___children___id'
  | 'organization___projects___children___children'
  | 'organization___projects___internal___content'
  | 'organization___projects___internal___contentDigest'
  | 'organization___projects___internal___description'
  | 'organization___projects___internal___fieldOwners'
  | 'organization___projects___internal___ignoreType'
  | 'organization___projects___internal___mediaType'
  | 'organization___projects___internal___owner'
  | 'organization___projects___internal___type'
  | 'organization___createdAt'
  | 'organization___updatedAt'
  | 'organization___publishedAt'
  | 'organization____xtypename'
  | 'organization___data____xtypename'
  | 'organization___data___id'
  | 'organization___nodeId'
  | 'organization___id'
  | 'organization___parent___id'
  | 'organization___parent___parent___id'
  | 'organization___parent___parent___children'
  | 'organization___parent___children'
  | 'organization___parent___children___id'
  | 'organization___parent___children___children'
  | 'organization___parent___internal___content'
  | 'organization___parent___internal___contentDigest'
  | 'organization___parent___internal___description'
  | 'organization___parent___internal___fieldOwners'
  | 'organization___parent___internal___ignoreType'
  | 'organization___parent___internal___mediaType'
  | 'organization___parent___internal___owner'
  | 'organization___parent___internal___type'
  | 'organization___children'
  | 'organization___children___id'
  | 'organization___children___parent___id'
  | 'organization___children___parent___children'
  | 'organization___children___children'
  | 'organization___children___children___id'
  | 'organization___children___children___children'
  | 'organization___children___internal___content'
  | 'organization___children___internal___contentDigest'
  | 'organization___children___internal___description'
  | 'organization___children___internal___fieldOwners'
  | 'organization___children___internal___ignoreType'
  | 'organization___children___internal___mediaType'
  | 'organization___children___internal___owner'
  | 'organization___children___internal___type'
  | 'organization___internal___content'
  | 'organization___internal___contentDigest'
  | 'organization___internal___description'
  | 'organization___internal___fieldOwners'
  | 'organization___internal___ignoreType'
  | 'organization___internal___mediaType'
  | 'organization___internal___owner'
  | 'organization___internal___type'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | '_xtypename'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type StrapiProjectGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiProjectEdge>;
  nodes: Array<StrapiProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiProjectGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiProjectGroupConnectionDistinctArgs = {
  field: StrapiProjectFieldsEnum;
};


export type StrapiProjectGroupConnectionMaxArgs = {
  field: StrapiProjectFieldsEnum;
};


export type StrapiProjectGroupConnectionMinArgs = {
  field: StrapiProjectFieldsEnum;
};


export type StrapiProjectGroupConnectionSumArgs = {
  field: StrapiProjectFieldsEnum;
};


export type StrapiProjectGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiProjectFieldsEnum;
};

export type StrapiProjectSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiProjectFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiTagEdge>;
  nodes: Array<StrapiTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiTagGroupConnection>;
};


export type StrapiTagConnectionDistinctArgs = {
  field: StrapiTagFieldsEnum;
};


export type StrapiTagConnectionMaxArgs = {
  field: StrapiTagFieldsEnum;
};


export type StrapiTagConnectionMinArgs = {
  field: StrapiTagFieldsEnum;
};


export type StrapiTagConnectionSumArgs = {
  field: StrapiTagFieldsEnum;
};


export type StrapiTagConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiTagFieldsEnum;
};

export type StrapiTagEdge = {
  next?: Maybe<StrapiTag>;
  node: StrapiTag;
  previous?: Maybe<StrapiTag>;
};

export type StrapiTagFieldsEnum =
  | 'strapiId'
  | 'name'
  | 'projects'
  | 'projects___strapiId'
  | 'projects___title'
  | 'projects___name'
  | 'projects___description'
  | 'projects___slug'
  | 'projects___coverImage___strapiId'
  | 'projects___coverImage___file___sourceInstanceName'
  | 'projects___coverImage___file___absolutePath'
  | 'projects___coverImage___file___relativePath'
  | 'projects___coverImage___file___extension'
  | 'projects___coverImage___file___size'
  | 'projects___coverImage___file___prettySize'
  | 'projects___coverImage___file___modifiedTime'
  | 'projects___coverImage___file___accessTime'
  | 'projects___coverImage___file___changeTime'
  | 'projects___coverImage___file___birthTime'
  | 'projects___coverImage___file___root'
  | 'projects___coverImage___file___dir'
  | 'projects___coverImage___file___base'
  | 'projects___coverImage___file___ext'
  | 'projects___coverImage___file___name'
  | 'projects___coverImage___file___relativeDirectory'
  | 'projects___coverImage___file___dev'
  | 'projects___coverImage___file___mode'
  | 'projects___coverImage___file___nlink'
  | 'projects___coverImage___file___uid'
  | 'projects___coverImage___file___gid'
  | 'projects___coverImage___file___rdev'
  | 'projects___coverImage___file___ino'
  | 'projects___coverImage___file___atimeMs'
  | 'projects___coverImage___file___mtimeMs'
  | 'projects___coverImage___file___ctimeMs'
  | 'projects___coverImage___file___atime'
  | 'projects___coverImage___file___mtime'
  | 'projects___coverImage___file___ctime'
  | 'projects___coverImage___file___birthtime'
  | 'projects___coverImage___file___birthtimeMs'
  | 'projects___coverImage___file___blksize'
  | 'projects___coverImage___file___blocks'
  | 'projects___coverImage___file___url'
  | 'projects___coverImage___file___publicURL'
  | 'projects___coverImage___file___childrenImageSharp'
  | 'projects___coverImage___file___id'
  | 'projects___coverImage___file___children'
  | 'projects___coverImage___name'
  | 'projects___coverImage___alternativeText'
  | 'projects___coverImage___caption'
  | 'projects___coverImage___width'
  | 'projects___coverImage___height'
  | 'projects___coverImage___formats'
  | 'projects___coverImage___hash'
  | 'projects___coverImage___ext'
  | 'projects___coverImage___mime'
  | 'projects___coverImage___size'
  | 'projects___coverImage___url'
  | 'projects___coverImage___previewUrl'
  | 'projects___coverImage___provider'
  | 'projects___coverImage___provider_metadata'
  | 'projects___coverImage___createdAt'
  | 'projects___coverImage___updatedAt'
  | 'projects___coverImage____xtypename'
  | 'projects___coverImage___data____xtypename'
  | 'projects___coverImage___data___id'
  | 'projects___coverImage___nodeId'
  | 'projects___coverImage___id'
  | 'projects___coverImage___parent___id'
  | 'projects___coverImage___parent___children'
  | 'projects___coverImage___children'
  | 'projects___coverImage___children___id'
  | 'projects___coverImage___children___children'
  | 'projects___coverImage___internal___content'
  | 'projects___coverImage___internal___contentDigest'
  | 'projects___coverImage___internal___description'
  | 'projects___coverImage___internal___fieldOwners'
  | 'projects___coverImage___internal___ignoreType'
  | 'projects___coverImage___internal___mediaType'
  | 'projects___coverImage___internal___owner'
  | 'projects___coverImage___internal___type'
  | 'projects___images'
  | 'projects___images___strapiId'
  | 'projects___images___file___sourceInstanceName'
  | 'projects___images___file___absolutePath'
  | 'projects___images___file___relativePath'
  | 'projects___images___file___extension'
  | 'projects___images___file___size'
  | 'projects___images___file___prettySize'
  | 'projects___images___file___modifiedTime'
  | 'projects___images___file___accessTime'
  | 'projects___images___file___changeTime'
  | 'projects___images___file___birthTime'
  | 'projects___images___file___root'
  | 'projects___images___file___dir'
  | 'projects___images___file___base'
  | 'projects___images___file___ext'
  | 'projects___images___file___name'
  | 'projects___images___file___relativeDirectory'
  | 'projects___images___file___dev'
  | 'projects___images___file___mode'
  | 'projects___images___file___nlink'
  | 'projects___images___file___uid'
  | 'projects___images___file___gid'
  | 'projects___images___file___rdev'
  | 'projects___images___file___ino'
  | 'projects___images___file___atimeMs'
  | 'projects___images___file___mtimeMs'
  | 'projects___images___file___ctimeMs'
  | 'projects___images___file___atime'
  | 'projects___images___file___mtime'
  | 'projects___images___file___ctime'
  | 'projects___images___file___birthtime'
  | 'projects___images___file___birthtimeMs'
  | 'projects___images___file___blksize'
  | 'projects___images___file___blocks'
  | 'projects___images___file___url'
  | 'projects___images___file___publicURL'
  | 'projects___images___file___childrenImageSharp'
  | 'projects___images___file___id'
  | 'projects___images___file___children'
  | 'projects___images___name'
  | 'projects___images___alternativeText'
  | 'projects___images___caption'
  | 'projects___images___width'
  | 'projects___images___height'
  | 'projects___images___formats'
  | 'projects___images___hash'
  | 'projects___images___ext'
  | 'projects___images___mime'
  | 'projects___images___size'
  | 'projects___images___url'
  | 'projects___images___previewUrl'
  | 'projects___images___provider'
  | 'projects___images___provider_metadata'
  | 'projects___images___createdAt'
  | 'projects___images___updatedAt'
  | 'projects___images____xtypename'
  | 'projects___images___data____xtypename'
  | 'projects___images___data___id'
  | 'projects___images___nodeId'
  | 'projects___images___id'
  | 'projects___images___parent___id'
  | 'projects___images___parent___children'
  | 'projects___images___children'
  | 'projects___images___children___id'
  | 'projects___images___children___children'
  | 'projects___images___internal___content'
  | 'projects___images___internal___contentDigest'
  | 'projects___images___internal___description'
  | 'projects___images___internal___fieldOwners'
  | 'projects___images___internal___ignoreType'
  | 'projects___images___internal___mediaType'
  | 'projects___images___internal___owner'
  | 'projects___images___internal___type'
  | 'projects___tags'
  | 'projects___tags___strapiId'
  | 'projects___tags___name'
  | 'projects___tags___projects'
  | 'projects___tags___projects___strapiId'
  | 'projects___tags___projects___title'
  | 'projects___tags___projects___name'
  | 'projects___tags___projects___description'
  | 'projects___tags___projects___slug'
  | 'projects___tags___projects___images'
  | 'projects___tags___projects___tags'
  | 'projects___tags___projects___areas'
  | 'projects___tags___projects___createdAt'
  | 'projects___tags___projects___updatedAt'
  | 'projects___tags___projects___publishedAt'
  | 'projects___tags___projects____xtypename'
  | 'projects___tags___projects___id'
  | 'projects___tags___projects___children'
  | 'projects___tags___areas'
  | 'projects___tags___areas___strapiId'
  | 'projects___tags___areas___name'
  | 'projects___tags___areas___description'
  | 'projects___tags___areas___color'
  | 'projects___tags___areas___slug'
  | 'projects___tags___areas___tags'
  | 'projects___tags___areas___projects'
  | 'projects___tags___areas___createdAt'
  | 'projects___tags___areas___updatedAt'
  | 'projects___tags___areas___publishedAt'
  | 'projects___tags___areas____xtypename'
  | 'projects___tags___areas___id'
  | 'projects___tags___areas___children'
  | 'projects___tags___createdAt'
  | 'projects___tags___updatedAt'
  | 'projects___tags___publishedAt'
  | 'projects___tags____xtypename'
  | 'projects___tags___id'
  | 'projects___tags___parent___id'
  | 'projects___tags___parent___children'
  | 'projects___tags___children'
  | 'projects___tags___children___id'
  | 'projects___tags___children___children'
  | 'projects___tags___internal___content'
  | 'projects___tags___internal___contentDigest'
  | 'projects___tags___internal___description'
  | 'projects___tags___internal___fieldOwners'
  | 'projects___tags___internal___ignoreType'
  | 'projects___tags___internal___mediaType'
  | 'projects___tags___internal___owner'
  | 'projects___tags___internal___type'
  | 'projects___areas'
  | 'projects___areas___strapiId'
  | 'projects___areas___name'
  | 'projects___areas___description'
  | 'projects___areas___color'
  | 'projects___areas___slug'
  | 'projects___areas___tags'
  | 'projects___areas___tags___strapiId'
  | 'projects___areas___tags___name'
  | 'projects___areas___tags___projects'
  | 'projects___areas___tags___areas'
  | 'projects___areas___tags___createdAt'
  | 'projects___areas___tags___updatedAt'
  | 'projects___areas___tags___publishedAt'
  | 'projects___areas___tags____xtypename'
  | 'projects___areas___tags___id'
  | 'projects___areas___tags___children'
  | 'projects___areas___projects'
  | 'projects___areas___projects___strapiId'
  | 'projects___areas___projects___title'
  | 'projects___areas___projects___name'
  | 'projects___areas___projects___description'
  | 'projects___areas___projects___slug'
  | 'projects___areas___projects___images'
  | 'projects___areas___projects___tags'
  | 'projects___areas___projects___areas'
  | 'projects___areas___projects___createdAt'
  | 'projects___areas___projects___updatedAt'
  | 'projects___areas___projects___publishedAt'
  | 'projects___areas___projects____xtypename'
  | 'projects___areas___projects___id'
  | 'projects___areas___projects___children'
  | 'projects___areas___createdAt'
  | 'projects___areas___updatedAt'
  | 'projects___areas___publishedAt'
  | 'projects___areas____xtypename'
  | 'projects___areas___id'
  | 'projects___areas___parent___id'
  | 'projects___areas___parent___children'
  | 'projects___areas___children'
  | 'projects___areas___children___id'
  | 'projects___areas___children___children'
  | 'projects___areas___internal___content'
  | 'projects___areas___internal___contentDigest'
  | 'projects___areas___internal___description'
  | 'projects___areas___internal___fieldOwners'
  | 'projects___areas___internal___ignoreType'
  | 'projects___areas___internal___mediaType'
  | 'projects___areas___internal___owner'
  | 'projects___areas___internal___type'
  | 'projects___organization___strapiId'
  | 'projects___organization___name'
  | 'projects___organization___link'
  | 'projects___organization___projects'
  | 'projects___organization___projects___strapiId'
  | 'projects___organization___projects___title'
  | 'projects___organization___projects___name'
  | 'projects___organization___projects___description'
  | 'projects___organization___projects___slug'
  | 'projects___organization___projects___images'
  | 'projects___organization___projects___tags'
  | 'projects___organization___projects___areas'
  | 'projects___organization___projects___createdAt'
  | 'projects___organization___projects___updatedAt'
  | 'projects___organization___projects___publishedAt'
  | 'projects___organization___projects____xtypename'
  | 'projects___organization___projects___id'
  | 'projects___organization___projects___children'
  | 'projects___organization___createdAt'
  | 'projects___organization___updatedAt'
  | 'projects___organization___publishedAt'
  | 'projects___organization____xtypename'
  | 'projects___organization___data____xtypename'
  | 'projects___organization___data___id'
  | 'projects___organization___nodeId'
  | 'projects___organization___id'
  | 'projects___organization___parent___id'
  | 'projects___organization___parent___children'
  | 'projects___organization___children'
  | 'projects___organization___children___id'
  | 'projects___organization___children___children'
  | 'projects___organization___internal___content'
  | 'projects___organization___internal___contentDigest'
  | 'projects___organization___internal___description'
  | 'projects___organization___internal___fieldOwners'
  | 'projects___organization___internal___ignoreType'
  | 'projects___organization___internal___mediaType'
  | 'projects___organization___internal___owner'
  | 'projects___organization___internal___type'
  | 'projects___createdAt'
  | 'projects___updatedAt'
  | 'projects___publishedAt'
  | 'projects____xtypename'
  | 'projects___id'
  | 'projects___parent___id'
  | 'projects___parent___parent___id'
  | 'projects___parent___parent___children'
  | 'projects___parent___children'
  | 'projects___parent___children___id'
  | 'projects___parent___children___children'
  | 'projects___parent___internal___content'
  | 'projects___parent___internal___contentDigest'
  | 'projects___parent___internal___description'
  | 'projects___parent___internal___fieldOwners'
  | 'projects___parent___internal___ignoreType'
  | 'projects___parent___internal___mediaType'
  | 'projects___parent___internal___owner'
  | 'projects___parent___internal___type'
  | 'projects___children'
  | 'projects___children___id'
  | 'projects___children___parent___id'
  | 'projects___children___parent___children'
  | 'projects___children___children'
  | 'projects___children___children___id'
  | 'projects___children___children___children'
  | 'projects___children___internal___content'
  | 'projects___children___internal___contentDigest'
  | 'projects___children___internal___description'
  | 'projects___children___internal___fieldOwners'
  | 'projects___children___internal___ignoreType'
  | 'projects___children___internal___mediaType'
  | 'projects___children___internal___owner'
  | 'projects___children___internal___type'
  | 'projects___internal___content'
  | 'projects___internal___contentDigest'
  | 'projects___internal___description'
  | 'projects___internal___fieldOwners'
  | 'projects___internal___ignoreType'
  | 'projects___internal___mediaType'
  | 'projects___internal___owner'
  | 'projects___internal___type'
  | 'areas'
  | 'areas___strapiId'
  | 'areas___name'
  | 'areas___description'
  | 'areas___color'
  | 'areas___slug'
  | 'areas___tags'
  | 'areas___tags___strapiId'
  | 'areas___tags___name'
  | 'areas___tags___projects'
  | 'areas___tags___projects___strapiId'
  | 'areas___tags___projects___title'
  | 'areas___tags___projects___name'
  | 'areas___tags___projects___description'
  | 'areas___tags___projects___slug'
  | 'areas___tags___projects___images'
  | 'areas___tags___projects___tags'
  | 'areas___tags___projects___areas'
  | 'areas___tags___projects___createdAt'
  | 'areas___tags___projects___updatedAt'
  | 'areas___tags___projects___publishedAt'
  | 'areas___tags___projects____xtypename'
  | 'areas___tags___projects___id'
  | 'areas___tags___projects___children'
  | 'areas___tags___areas'
  | 'areas___tags___areas___strapiId'
  | 'areas___tags___areas___name'
  | 'areas___tags___areas___description'
  | 'areas___tags___areas___color'
  | 'areas___tags___areas___slug'
  | 'areas___tags___areas___tags'
  | 'areas___tags___areas___projects'
  | 'areas___tags___areas___createdAt'
  | 'areas___tags___areas___updatedAt'
  | 'areas___tags___areas___publishedAt'
  | 'areas___tags___areas____xtypename'
  | 'areas___tags___areas___id'
  | 'areas___tags___areas___children'
  | 'areas___tags___createdAt'
  | 'areas___tags___updatedAt'
  | 'areas___tags___publishedAt'
  | 'areas___tags____xtypename'
  | 'areas___tags___id'
  | 'areas___tags___parent___id'
  | 'areas___tags___parent___children'
  | 'areas___tags___children'
  | 'areas___tags___children___id'
  | 'areas___tags___children___children'
  | 'areas___tags___internal___content'
  | 'areas___tags___internal___contentDigest'
  | 'areas___tags___internal___description'
  | 'areas___tags___internal___fieldOwners'
  | 'areas___tags___internal___ignoreType'
  | 'areas___tags___internal___mediaType'
  | 'areas___tags___internal___owner'
  | 'areas___tags___internal___type'
  | 'areas___projects'
  | 'areas___projects___strapiId'
  | 'areas___projects___title'
  | 'areas___projects___name'
  | 'areas___projects___description'
  | 'areas___projects___slug'
  | 'areas___projects___coverImage___strapiId'
  | 'areas___projects___coverImage___name'
  | 'areas___projects___coverImage___alternativeText'
  | 'areas___projects___coverImage___caption'
  | 'areas___projects___coverImage___width'
  | 'areas___projects___coverImage___height'
  | 'areas___projects___coverImage___formats'
  | 'areas___projects___coverImage___hash'
  | 'areas___projects___coverImage___ext'
  | 'areas___projects___coverImage___mime'
  | 'areas___projects___coverImage___size'
  | 'areas___projects___coverImage___url'
  | 'areas___projects___coverImage___previewUrl'
  | 'areas___projects___coverImage___provider'
  | 'areas___projects___coverImage___provider_metadata'
  | 'areas___projects___coverImage___createdAt'
  | 'areas___projects___coverImage___updatedAt'
  | 'areas___projects___coverImage____xtypename'
  | 'areas___projects___coverImage___nodeId'
  | 'areas___projects___coverImage___id'
  | 'areas___projects___coverImage___children'
  | 'areas___projects___images'
  | 'areas___projects___images___strapiId'
  | 'areas___projects___images___name'
  | 'areas___projects___images___alternativeText'
  | 'areas___projects___images___caption'
  | 'areas___projects___images___width'
  | 'areas___projects___images___height'
  | 'areas___projects___images___formats'
  | 'areas___projects___images___hash'
  | 'areas___projects___images___ext'
  | 'areas___projects___images___mime'
  | 'areas___projects___images___size'
  | 'areas___projects___images___url'
  | 'areas___projects___images___previewUrl'
  | 'areas___projects___images___provider'
  | 'areas___projects___images___provider_metadata'
  | 'areas___projects___images___createdAt'
  | 'areas___projects___images___updatedAt'
  | 'areas___projects___images____xtypename'
  | 'areas___projects___images___nodeId'
  | 'areas___projects___images___id'
  | 'areas___projects___images___children'
  | 'areas___projects___tags'
  | 'areas___projects___tags___strapiId'
  | 'areas___projects___tags___name'
  | 'areas___projects___tags___projects'
  | 'areas___projects___tags___areas'
  | 'areas___projects___tags___createdAt'
  | 'areas___projects___tags___updatedAt'
  | 'areas___projects___tags___publishedAt'
  | 'areas___projects___tags____xtypename'
  | 'areas___projects___tags___id'
  | 'areas___projects___tags___children'
  | 'areas___projects___areas'
  | 'areas___projects___areas___strapiId'
  | 'areas___projects___areas___name'
  | 'areas___projects___areas___description'
  | 'areas___projects___areas___color'
  | 'areas___projects___areas___slug'
  | 'areas___projects___areas___tags'
  | 'areas___projects___areas___projects'
  | 'areas___projects___areas___createdAt'
  | 'areas___projects___areas___updatedAt'
  | 'areas___projects___areas___publishedAt'
  | 'areas___projects___areas____xtypename'
  | 'areas___projects___areas___id'
  | 'areas___projects___areas___children'
  | 'areas___projects___organization___strapiId'
  | 'areas___projects___organization___name'
  | 'areas___projects___organization___link'
  | 'areas___projects___organization___projects'
  | 'areas___projects___organization___createdAt'
  | 'areas___projects___organization___updatedAt'
  | 'areas___projects___organization___publishedAt'
  | 'areas___projects___organization____xtypename'
  | 'areas___projects___organization___nodeId'
  | 'areas___projects___organization___id'
  | 'areas___projects___organization___children'
  | 'areas___projects___createdAt'
  | 'areas___projects___updatedAt'
  | 'areas___projects___publishedAt'
  | 'areas___projects____xtypename'
  | 'areas___projects___id'
  | 'areas___projects___parent___id'
  | 'areas___projects___parent___children'
  | 'areas___projects___children'
  | 'areas___projects___children___id'
  | 'areas___projects___children___children'
  | 'areas___projects___internal___content'
  | 'areas___projects___internal___contentDigest'
  | 'areas___projects___internal___description'
  | 'areas___projects___internal___fieldOwners'
  | 'areas___projects___internal___ignoreType'
  | 'areas___projects___internal___mediaType'
  | 'areas___projects___internal___owner'
  | 'areas___projects___internal___type'
  | 'areas___createdAt'
  | 'areas___updatedAt'
  | 'areas___publishedAt'
  | 'areas____xtypename'
  | 'areas___id'
  | 'areas___parent___id'
  | 'areas___parent___parent___id'
  | 'areas___parent___parent___children'
  | 'areas___parent___children'
  | 'areas___parent___children___id'
  | 'areas___parent___children___children'
  | 'areas___parent___internal___content'
  | 'areas___parent___internal___contentDigest'
  | 'areas___parent___internal___description'
  | 'areas___parent___internal___fieldOwners'
  | 'areas___parent___internal___ignoreType'
  | 'areas___parent___internal___mediaType'
  | 'areas___parent___internal___owner'
  | 'areas___parent___internal___type'
  | 'areas___children'
  | 'areas___children___id'
  | 'areas___children___parent___id'
  | 'areas___children___parent___children'
  | 'areas___children___children'
  | 'areas___children___children___id'
  | 'areas___children___children___children'
  | 'areas___children___internal___content'
  | 'areas___children___internal___contentDigest'
  | 'areas___children___internal___description'
  | 'areas___children___internal___fieldOwners'
  | 'areas___children___internal___ignoreType'
  | 'areas___children___internal___mediaType'
  | 'areas___children___internal___owner'
  | 'areas___children___internal___type'
  | 'areas___internal___content'
  | 'areas___internal___contentDigest'
  | 'areas___internal___description'
  | 'areas___internal___fieldOwners'
  | 'areas___internal___ignoreType'
  | 'areas___internal___mediaType'
  | 'areas___internal___owner'
  | 'areas___internal___type'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | '_xtypename'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type StrapiTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiTagEdge>;
  nodes: Array<StrapiTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiTagGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiTagGroupConnectionDistinctArgs = {
  field: StrapiTagFieldsEnum;
};


export type StrapiTagGroupConnectionMaxArgs = {
  field: StrapiTagFieldsEnum;
};


export type StrapiTagGroupConnectionMinArgs = {
  field: StrapiTagFieldsEnum;
};


export type StrapiTagGroupConnectionSumArgs = {
  field: StrapiTagFieldsEnum;
};


export type StrapiTagGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiTagFieldsEnum;
};

export type StrapiTagSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiTagFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiAreaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiAreaEdge>;
  nodes: Array<StrapiArea>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiAreaGroupConnection>;
};


export type StrapiAreaConnectionDistinctArgs = {
  field: StrapiAreaFieldsEnum;
};


export type StrapiAreaConnectionMaxArgs = {
  field: StrapiAreaFieldsEnum;
};


export type StrapiAreaConnectionMinArgs = {
  field: StrapiAreaFieldsEnum;
};


export type StrapiAreaConnectionSumArgs = {
  field: StrapiAreaFieldsEnum;
};


export type StrapiAreaConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiAreaFieldsEnum;
};

export type StrapiAreaEdge = {
  next?: Maybe<StrapiArea>;
  node: StrapiArea;
  previous?: Maybe<StrapiArea>;
};

export type StrapiAreaFieldsEnum =
  | 'strapiId'
  | 'name'
  | 'description'
  | 'color'
  | 'slug'
  | 'tags'
  | 'tags___strapiId'
  | 'tags___name'
  | 'tags___projects'
  | 'tags___projects___strapiId'
  | 'tags___projects___title'
  | 'tags___projects___name'
  | 'tags___projects___description'
  | 'tags___projects___slug'
  | 'tags___projects___coverImage___strapiId'
  | 'tags___projects___coverImage___name'
  | 'tags___projects___coverImage___alternativeText'
  | 'tags___projects___coverImage___caption'
  | 'tags___projects___coverImage___width'
  | 'tags___projects___coverImage___height'
  | 'tags___projects___coverImage___formats'
  | 'tags___projects___coverImage___hash'
  | 'tags___projects___coverImage___ext'
  | 'tags___projects___coverImage___mime'
  | 'tags___projects___coverImage___size'
  | 'tags___projects___coverImage___url'
  | 'tags___projects___coverImage___previewUrl'
  | 'tags___projects___coverImage___provider'
  | 'tags___projects___coverImage___provider_metadata'
  | 'tags___projects___coverImage___createdAt'
  | 'tags___projects___coverImage___updatedAt'
  | 'tags___projects___coverImage____xtypename'
  | 'tags___projects___coverImage___nodeId'
  | 'tags___projects___coverImage___id'
  | 'tags___projects___coverImage___children'
  | 'tags___projects___images'
  | 'tags___projects___images___strapiId'
  | 'tags___projects___images___name'
  | 'tags___projects___images___alternativeText'
  | 'tags___projects___images___caption'
  | 'tags___projects___images___width'
  | 'tags___projects___images___height'
  | 'tags___projects___images___formats'
  | 'tags___projects___images___hash'
  | 'tags___projects___images___ext'
  | 'tags___projects___images___mime'
  | 'tags___projects___images___size'
  | 'tags___projects___images___url'
  | 'tags___projects___images___previewUrl'
  | 'tags___projects___images___provider'
  | 'tags___projects___images___provider_metadata'
  | 'tags___projects___images___createdAt'
  | 'tags___projects___images___updatedAt'
  | 'tags___projects___images____xtypename'
  | 'tags___projects___images___nodeId'
  | 'tags___projects___images___id'
  | 'tags___projects___images___children'
  | 'tags___projects___tags'
  | 'tags___projects___tags___strapiId'
  | 'tags___projects___tags___name'
  | 'tags___projects___tags___projects'
  | 'tags___projects___tags___areas'
  | 'tags___projects___tags___createdAt'
  | 'tags___projects___tags___updatedAt'
  | 'tags___projects___tags___publishedAt'
  | 'tags___projects___tags____xtypename'
  | 'tags___projects___tags___id'
  | 'tags___projects___tags___children'
  | 'tags___projects___areas'
  | 'tags___projects___areas___strapiId'
  | 'tags___projects___areas___name'
  | 'tags___projects___areas___description'
  | 'tags___projects___areas___color'
  | 'tags___projects___areas___slug'
  | 'tags___projects___areas___tags'
  | 'tags___projects___areas___projects'
  | 'tags___projects___areas___createdAt'
  | 'tags___projects___areas___updatedAt'
  | 'tags___projects___areas___publishedAt'
  | 'tags___projects___areas____xtypename'
  | 'tags___projects___areas___id'
  | 'tags___projects___areas___children'
  | 'tags___projects___organization___strapiId'
  | 'tags___projects___organization___name'
  | 'tags___projects___organization___link'
  | 'tags___projects___organization___projects'
  | 'tags___projects___organization___createdAt'
  | 'tags___projects___organization___updatedAt'
  | 'tags___projects___organization___publishedAt'
  | 'tags___projects___organization____xtypename'
  | 'tags___projects___organization___nodeId'
  | 'tags___projects___organization___id'
  | 'tags___projects___organization___children'
  | 'tags___projects___createdAt'
  | 'tags___projects___updatedAt'
  | 'tags___projects___publishedAt'
  | 'tags___projects____xtypename'
  | 'tags___projects___id'
  | 'tags___projects___parent___id'
  | 'tags___projects___parent___children'
  | 'tags___projects___children'
  | 'tags___projects___children___id'
  | 'tags___projects___children___children'
  | 'tags___projects___internal___content'
  | 'tags___projects___internal___contentDigest'
  | 'tags___projects___internal___description'
  | 'tags___projects___internal___fieldOwners'
  | 'tags___projects___internal___ignoreType'
  | 'tags___projects___internal___mediaType'
  | 'tags___projects___internal___owner'
  | 'tags___projects___internal___type'
  | 'tags___areas'
  | 'tags___areas___strapiId'
  | 'tags___areas___name'
  | 'tags___areas___description'
  | 'tags___areas___color'
  | 'tags___areas___slug'
  | 'tags___areas___tags'
  | 'tags___areas___tags___strapiId'
  | 'tags___areas___tags___name'
  | 'tags___areas___tags___projects'
  | 'tags___areas___tags___areas'
  | 'tags___areas___tags___createdAt'
  | 'tags___areas___tags___updatedAt'
  | 'tags___areas___tags___publishedAt'
  | 'tags___areas___tags____xtypename'
  | 'tags___areas___tags___id'
  | 'tags___areas___tags___children'
  | 'tags___areas___projects'
  | 'tags___areas___projects___strapiId'
  | 'tags___areas___projects___title'
  | 'tags___areas___projects___name'
  | 'tags___areas___projects___description'
  | 'tags___areas___projects___slug'
  | 'tags___areas___projects___images'
  | 'tags___areas___projects___tags'
  | 'tags___areas___projects___areas'
  | 'tags___areas___projects___createdAt'
  | 'tags___areas___projects___updatedAt'
  | 'tags___areas___projects___publishedAt'
  | 'tags___areas___projects____xtypename'
  | 'tags___areas___projects___id'
  | 'tags___areas___projects___children'
  | 'tags___areas___createdAt'
  | 'tags___areas___updatedAt'
  | 'tags___areas___publishedAt'
  | 'tags___areas____xtypename'
  | 'tags___areas___id'
  | 'tags___areas___parent___id'
  | 'tags___areas___parent___children'
  | 'tags___areas___children'
  | 'tags___areas___children___id'
  | 'tags___areas___children___children'
  | 'tags___areas___internal___content'
  | 'tags___areas___internal___contentDigest'
  | 'tags___areas___internal___description'
  | 'tags___areas___internal___fieldOwners'
  | 'tags___areas___internal___ignoreType'
  | 'tags___areas___internal___mediaType'
  | 'tags___areas___internal___owner'
  | 'tags___areas___internal___type'
  | 'tags___createdAt'
  | 'tags___updatedAt'
  | 'tags___publishedAt'
  | 'tags____xtypename'
  | 'tags___id'
  | 'tags___parent___id'
  | 'tags___parent___parent___id'
  | 'tags___parent___parent___children'
  | 'tags___parent___children'
  | 'tags___parent___children___id'
  | 'tags___parent___children___children'
  | 'tags___parent___internal___content'
  | 'tags___parent___internal___contentDigest'
  | 'tags___parent___internal___description'
  | 'tags___parent___internal___fieldOwners'
  | 'tags___parent___internal___ignoreType'
  | 'tags___parent___internal___mediaType'
  | 'tags___parent___internal___owner'
  | 'tags___parent___internal___type'
  | 'tags___children'
  | 'tags___children___id'
  | 'tags___children___parent___id'
  | 'tags___children___parent___children'
  | 'tags___children___children'
  | 'tags___children___children___id'
  | 'tags___children___children___children'
  | 'tags___children___internal___content'
  | 'tags___children___internal___contentDigest'
  | 'tags___children___internal___description'
  | 'tags___children___internal___fieldOwners'
  | 'tags___children___internal___ignoreType'
  | 'tags___children___internal___mediaType'
  | 'tags___children___internal___owner'
  | 'tags___children___internal___type'
  | 'tags___internal___content'
  | 'tags___internal___contentDigest'
  | 'tags___internal___description'
  | 'tags___internal___fieldOwners'
  | 'tags___internal___ignoreType'
  | 'tags___internal___mediaType'
  | 'tags___internal___owner'
  | 'tags___internal___type'
  | 'projects'
  | 'projects___strapiId'
  | 'projects___title'
  | 'projects___name'
  | 'projects___description'
  | 'projects___slug'
  | 'projects___coverImage___strapiId'
  | 'projects___coverImage___file___sourceInstanceName'
  | 'projects___coverImage___file___absolutePath'
  | 'projects___coverImage___file___relativePath'
  | 'projects___coverImage___file___extension'
  | 'projects___coverImage___file___size'
  | 'projects___coverImage___file___prettySize'
  | 'projects___coverImage___file___modifiedTime'
  | 'projects___coverImage___file___accessTime'
  | 'projects___coverImage___file___changeTime'
  | 'projects___coverImage___file___birthTime'
  | 'projects___coverImage___file___root'
  | 'projects___coverImage___file___dir'
  | 'projects___coverImage___file___base'
  | 'projects___coverImage___file___ext'
  | 'projects___coverImage___file___name'
  | 'projects___coverImage___file___relativeDirectory'
  | 'projects___coverImage___file___dev'
  | 'projects___coverImage___file___mode'
  | 'projects___coverImage___file___nlink'
  | 'projects___coverImage___file___uid'
  | 'projects___coverImage___file___gid'
  | 'projects___coverImage___file___rdev'
  | 'projects___coverImage___file___ino'
  | 'projects___coverImage___file___atimeMs'
  | 'projects___coverImage___file___mtimeMs'
  | 'projects___coverImage___file___ctimeMs'
  | 'projects___coverImage___file___atime'
  | 'projects___coverImage___file___mtime'
  | 'projects___coverImage___file___ctime'
  | 'projects___coverImage___file___birthtime'
  | 'projects___coverImage___file___birthtimeMs'
  | 'projects___coverImage___file___blksize'
  | 'projects___coverImage___file___blocks'
  | 'projects___coverImage___file___url'
  | 'projects___coverImage___file___publicURL'
  | 'projects___coverImage___file___childrenImageSharp'
  | 'projects___coverImage___file___id'
  | 'projects___coverImage___file___children'
  | 'projects___coverImage___name'
  | 'projects___coverImage___alternativeText'
  | 'projects___coverImage___caption'
  | 'projects___coverImage___width'
  | 'projects___coverImage___height'
  | 'projects___coverImage___formats'
  | 'projects___coverImage___hash'
  | 'projects___coverImage___ext'
  | 'projects___coverImage___mime'
  | 'projects___coverImage___size'
  | 'projects___coverImage___url'
  | 'projects___coverImage___previewUrl'
  | 'projects___coverImage___provider'
  | 'projects___coverImage___provider_metadata'
  | 'projects___coverImage___createdAt'
  | 'projects___coverImage___updatedAt'
  | 'projects___coverImage____xtypename'
  | 'projects___coverImage___data____xtypename'
  | 'projects___coverImage___data___id'
  | 'projects___coverImage___nodeId'
  | 'projects___coverImage___id'
  | 'projects___coverImage___parent___id'
  | 'projects___coverImage___parent___children'
  | 'projects___coverImage___children'
  | 'projects___coverImage___children___id'
  | 'projects___coverImage___children___children'
  | 'projects___coverImage___internal___content'
  | 'projects___coverImage___internal___contentDigest'
  | 'projects___coverImage___internal___description'
  | 'projects___coverImage___internal___fieldOwners'
  | 'projects___coverImage___internal___ignoreType'
  | 'projects___coverImage___internal___mediaType'
  | 'projects___coverImage___internal___owner'
  | 'projects___coverImage___internal___type'
  | 'projects___images'
  | 'projects___images___strapiId'
  | 'projects___images___file___sourceInstanceName'
  | 'projects___images___file___absolutePath'
  | 'projects___images___file___relativePath'
  | 'projects___images___file___extension'
  | 'projects___images___file___size'
  | 'projects___images___file___prettySize'
  | 'projects___images___file___modifiedTime'
  | 'projects___images___file___accessTime'
  | 'projects___images___file___changeTime'
  | 'projects___images___file___birthTime'
  | 'projects___images___file___root'
  | 'projects___images___file___dir'
  | 'projects___images___file___base'
  | 'projects___images___file___ext'
  | 'projects___images___file___name'
  | 'projects___images___file___relativeDirectory'
  | 'projects___images___file___dev'
  | 'projects___images___file___mode'
  | 'projects___images___file___nlink'
  | 'projects___images___file___uid'
  | 'projects___images___file___gid'
  | 'projects___images___file___rdev'
  | 'projects___images___file___ino'
  | 'projects___images___file___atimeMs'
  | 'projects___images___file___mtimeMs'
  | 'projects___images___file___ctimeMs'
  | 'projects___images___file___atime'
  | 'projects___images___file___mtime'
  | 'projects___images___file___ctime'
  | 'projects___images___file___birthtime'
  | 'projects___images___file___birthtimeMs'
  | 'projects___images___file___blksize'
  | 'projects___images___file___blocks'
  | 'projects___images___file___url'
  | 'projects___images___file___publicURL'
  | 'projects___images___file___childrenImageSharp'
  | 'projects___images___file___id'
  | 'projects___images___file___children'
  | 'projects___images___name'
  | 'projects___images___alternativeText'
  | 'projects___images___caption'
  | 'projects___images___width'
  | 'projects___images___height'
  | 'projects___images___formats'
  | 'projects___images___hash'
  | 'projects___images___ext'
  | 'projects___images___mime'
  | 'projects___images___size'
  | 'projects___images___url'
  | 'projects___images___previewUrl'
  | 'projects___images___provider'
  | 'projects___images___provider_metadata'
  | 'projects___images___createdAt'
  | 'projects___images___updatedAt'
  | 'projects___images____xtypename'
  | 'projects___images___data____xtypename'
  | 'projects___images___data___id'
  | 'projects___images___nodeId'
  | 'projects___images___id'
  | 'projects___images___parent___id'
  | 'projects___images___parent___children'
  | 'projects___images___children'
  | 'projects___images___children___id'
  | 'projects___images___children___children'
  | 'projects___images___internal___content'
  | 'projects___images___internal___contentDigest'
  | 'projects___images___internal___description'
  | 'projects___images___internal___fieldOwners'
  | 'projects___images___internal___ignoreType'
  | 'projects___images___internal___mediaType'
  | 'projects___images___internal___owner'
  | 'projects___images___internal___type'
  | 'projects___tags'
  | 'projects___tags___strapiId'
  | 'projects___tags___name'
  | 'projects___tags___projects'
  | 'projects___tags___projects___strapiId'
  | 'projects___tags___projects___title'
  | 'projects___tags___projects___name'
  | 'projects___tags___projects___description'
  | 'projects___tags___projects___slug'
  | 'projects___tags___projects___images'
  | 'projects___tags___projects___tags'
  | 'projects___tags___projects___areas'
  | 'projects___tags___projects___createdAt'
  | 'projects___tags___projects___updatedAt'
  | 'projects___tags___projects___publishedAt'
  | 'projects___tags___projects____xtypename'
  | 'projects___tags___projects___id'
  | 'projects___tags___projects___children'
  | 'projects___tags___areas'
  | 'projects___tags___areas___strapiId'
  | 'projects___tags___areas___name'
  | 'projects___tags___areas___description'
  | 'projects___tags___areas___color'
  | 'projects___tags___areas___slug'
  | 'projects___tags___areas___tags'
  | 'projects___tags___areas___projects'
  | 'projects___tags___areas___createdAt'
  | 'projects___tags___areas___updatedAt'
  | 'projects___tags___areas___publishedAt'
  | 'projects___tags___areas____xtypename'
  | 'projects___tags___areas___id'
  | 'projects___tags___areas___children'
  | 'projects___tags___createdAt'
  | 'projects___tags___updatedAt'
  | 'projects___tags___publishedAt'
  | 'projects___tags____xtypename'
  | 'projects___tags___id'
  | 'projects___tags___parent___id'
  | 'projects___tags___parent___children'
  | 'projects___tags___children'
  | 'projects___tags___children___id'
  | 'projects___tags___children___children'
  | 'projects___tags___internal___content'
  | 'projects___tags___internal___contentDigest'
  | 'projects___tags___internal___description'
  | 'projects___tags___internal___fieldOwners'
  | 'projects___tags___internal___ignoreType'
  | 'projects___tags___internal___mediaType'
  | 'projects___tags___internal___owner'
  | 'projects___tags___internal___type'
  | 'projects___areas'
  | 'projects___areas___strapiId'
  | 'projects___areas___name'
  | 'projects___areas___description'
  | 'projects___areas___color'
  | 'projects___areas___slug'
  | 'projects___areas___tags'
  | 'projects___areas___tags___strapiId'
  | 'projects___areas___tags___name'
  | 'projects___areas___tags___projects'
  | 'projects___areas___tags___areas'
  | 'projects___areas___tags___createdAt'
  | 'projects___areas___tags___updatedAt'
  | 'projects___areas___tags___publishedAt'
  | 'projects___areas___tags____xtypename'
  | 'projects___areas___tags___id'
  | 'projects___areas___tags___children'
  | 'projects___areas___projects'
  | 'projects___areas___projects___strapiId'
  | 'projects___areas___projects___title'
  | 'projects___areas___projects___name'
  | 'projects___areas___projects___description'
  | 'projects___areas___projects___slug'
  | 'projects___areas___projects___images'
  | 'projects___areas___projects___tags'
  | 'projects___areas___projects___areas'
  | 'projects___areas___projects___createdAt'
  | 'projects___areas___projects___updatedAt'
  | 'projects___areas___projects___publishedAt'
  | 'projects___areas___projects____xtypename'
  | 'projects___areas___projects___id'
  | 'projects___areas___projects___children'
  | 'projects___areas___createdAt'
  | 'projects___areas___updatedAt'
  | 'projects___areas___publishedAt'
  | 'projects___areas____xtypename'
  | 'projects___areas___id'
  | 'projects___areas___parent___id'
  | 'projects___areas___parent___children'
  | 'projects___areas___children'
  | 'projects___areas___children___id'
  | 'projects___areas___children___children'
  | 'projects___areas___internal___content'
  | 'projects___areas___internal___contentDigest'
  | 'projects___areas___internal___description'
  | 'projects___areas___internal___fieldOwners'
  | 'projects___areas___internal___ignoreType'
  | 'projects___areas___internal___mediaType'
  | 'projects___areas___internal___owner'
  | 'projects___areas___internal___type'
  | 'projects___organization___strapiId'
  | 'projects___organization___name'
  | 'projects___organization___link'
  | 'projects___organization___projects'
  | 'projects___organization___projects___strapiId'
  | 'projects___organization___projects___title'
  | 'projects___organization___projects___name'
  | 'projects___organization___projects___description'
  | 'projects___organization___projects___slug'
  | 'projects___organization___projects___images'
  | 'projects___organization___projects___tags'
  | 'projects___organization___projects___areas'
  | 'projects___organization___projects___createdAt'
  | 'projects___organization___projects___updatedAt'
  | 'projects___organization___projects___publishedAt'
  | 'projects___organization___projects____xtypename'
  | 'projects___organization___projects___id'
  | 'projects___organization___projects___children'
  | 'projects___organization___createdAt'
  | 'projects___organization___updatedAt'
  | 'projects___organization___publishedAt'
  | 'projects___organization____xtypename'
  | 'projects___organization___data____xtypename'
  | 'projects___organization___data___id'
  | 'projects___organization___nodeId'
  | 'projects___organization___id'
  | 'projects___organization___parent___id'
  | 'projects___organization___parent___children'
  | 'projects___organization___children'
  | 'projects___organization___children___id'
  | 'projects___organization___children___children'
  | 'projects___organization___internal___content'
  | 'projects___organization___internal___contentDigest'
  | 'projects___organization___internal___description'
  | 'projects___organization___internal___fieldOwners'
  | 'projects___organization___internal___ignoreType'
  | 'projects___organization___internal___mediaType'
  | 'projects___organization___internal___owner'
  | 'projects___organization___internal___type'
  | 'projects___createdAt'
  | 'projects___updatedAt'
  | 'projects___publishedAt'
  | 'projects____xtypename'
  | 'projects___id'
  | 'projects___parent___id'
  | 'projects___parent___parent___id'
  | 'projects___parent___parent___children'
  | 'projects___parent___children'
  | 'projects___parent___children___id'
  | 'projects___parent___children___children'
  | 'projects___parent___internal___content'
  | 'projects___parent___internal___contentDigest'
  | 'projects___parent___internal___description'
  | 'projects___parent___internal___fieldOwners'
  | 'projects___parent___internal___ignoreType'
  | 'projects___parent___internal___mediaType'
  | 'projects___parent___internal___owner'
  | 'projects___parent___internal___type'
  | 'projects___children'
  | 'projects___children___id'
  | 'projects___children___parent___id'
  | 'projects___children___parent___children'
  | 'projects___children___children'
  | 'projects___children___children___id'
  | 'projects___children___children___children'
  | 'projects___children___internal___content'
  | 'projects___children___internal___contentDigest'
  | 'projects___children___internal___description'
  | 'projects___children___internal___fieldOwners'
  | 'projects___children___internal___ignoreType'
  | 'projects___children___internal___mediaType'
  | 'projects___children___internal___owner'
  | 'projects___children___internal___type'
  | 'projects___internal___content'
  | 'projects___internal___contentDigest'
  | 'projects___internal___description'
  | 'projects___internal___fieldOwners'
  | 'projects___internal___ignoreType'
  | 'projects___internal___mediaType'
  | 'projects___internal___owner'
  | 'projects___internal___type'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | '_xtypename'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type StrapiAreaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiAreaEdge>;
  nodes: Array<StrapiArea>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiAreaGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiAreaGroupConnectionDistinctArgs = {
  field: StrapiAreaFieldsEnum;
};


export type StrapiAreaGroupConnectionMaxArgs = {
  field: StrapiAreaFieldsEnum;
};


export type StrapiAreaGroupConnectionMinArgs = {
  field: StrapiAreaFieldsEnum;
};


export type StrapiAreaGroupConnectionSumArgs = {
  field: StrapiAreaFieldsEnum;
};


export type StrapiAreaGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiAreaFieldsEnum;
};

export type StrapiAreaSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiAreaFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiOrganizationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiOrganizationEdge>;
  nodes: Array<StrapiOrganization>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiOrganizationGroupConnection>;
};


export type StrapiOrganizationConnectionDistinctArgs = {
  field: StrapiOrganizationFieldsEnum;
};


export type StrapiOrganizationConnectionMaxArgs = {
  field: StrapiOrganizationFieldsEnum;
};


export type StrapiOrganizationConnectionMinArgs = {
  field: StrapiOrganizationFieldsEnum;
};


export type StrapiOrganizationConnectionSumArgs = {
  field: StrapiOrganizationFieldsEnum;
};


export type StrapiOrganizationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiOrganizationFieldsEnum;
};

export type StrapiOrganizationEdge = {
  next?: Maybe<StrapiOrganization>;
  node: StrapiOrganization;
  previous?: Maybe<StrapiOrganization>;
};

export type StrapiOrganizationFieldsEnum =
  | 'strapiId'
  | 'name'
  | 'link'
  | 'projects'
  | 'projects___strapiId'
  | 'projects___title'
  | 'projects___name'
  | 'projects___description'
  | 'projects___slug'
  | 'projects___coverImage___strapiId'
  | 'projects___coverImage___file___sourceInstanceName'
  | 'projects___coverImage___file___absolutePath'
  | 'projects___coverImage___file___relativePath'
  | 'projects___coverImage___file___extension'
  | 'projects___coverImage___file___size'
  | 'projects___coverImage___file___prettySize'
  | 'projects___coverImage___file___modifiedTime'
  | 'projects___coverImage___file___accessTime'
  | 'projects___coverImage___file___changeTime'
  | 'projects___coverImage___file___birthTime'
  | 'projects___coverImage___file___root'
  | 'projects___coverImage___file___dir'
  | 'projects___coverImage___file___base'
  | 'projects___coverImage___file___ext'
  | 'projects___coverImage___file___name'
  | 'projects___coverImage___file___relativeDirectory'
  | 'projects___coverImage___file___dev'
  | 'projects___coverImage___file___mode'
  | 'projects___coverImage___file___nlink'
  | 'projects___coverImage___file___uid'
  | 'projects___coverImage___file___gid'
  | 'projects___coverImage___file___rdev'
  | 'projects___coverImage___file___ino'
  | 'projects___coverImage___file___atimeMs'
  | 'projects___coverImage___file___mtimeMs'
  | 'projects___coverImage___file___ctimeMs'
  | 'projects___coverImage___file___atime'
  | 'projects___coverImage___file___mtime'
  | 'projects___coverImage___file___ctime'
  | 'projects___coverImage___file___birthtime'
  | 'projects___coverImage___file___birthtimeMs'
  | 'projects___coverImage___file___blksize'
  | 'projects___coverImage___file___blocks'
  | 'projects___coverImage___file___url'
  | 'projects___coverImage___file___publicURL'
  | 'projects___coverImage___file___childrenImageSharp'
  | 'projects___coverImage___file___id'
  | 'projects___coverImage___file___children'
  | 'projects___coverImage___name'
  | 'projects___coverImage___alternativeText'
  | 'projects___coverImage___caption'
  | 'projects___coverImage___width'
  | 'projects___coverImage___height'
  | 'projects___coverImage___formats'
  | 'projects___coverImage___hash'
  | 'projects___coverImage___ext'
  | 'projects___coverImage___mime'
  | 'projects___coverImage___size'
  | 'projects___coverImage___url'
  | 'projects___coverImage___previewUrl'
  | 'projects___coverImage___provider'
  | 'projects___coverImage___provider_metadata'
  | 'projects___coverImage___createdAt'
  | 'projects___coverImage___updatedAt'
  | 'projects___coverImage____xtypename'
  | 'projects___coverImage___data____xtypename'
  | 'projects___coverImage___data___id'
  | 'projects___coverImage___nodeId'
  | 'projects___coverImage___id'
  | 'projects___coverImage___parent___id'
  | 'projects___coverImage___parent___children'
  | 'projects___coverImage___children'
  | 'projects___coverImage___children___id'
  | 'projects___coverImage___children___children'
  | 'projects___coverImage___internal___content'
  | 'projects___coverImage___internal___contentDigest'
  | 'projects___coverImage___internal___description'
  | 'projects___coverImage___internal___fieldOwners'
  | 'projects___coverImage___internal___ignoreType'
  | 'projects___coverImage___internal___mediaType'
  | 'projects___coverImage___internal___owner'
  | 'projects___coverImage___internal___type'
  | 'projects___images'
  | 'projects___images___strapiId'
  | 'projects___images___file___sourceInstanceName'
  | 'projects___images___file___absolutePath'
  | 'projects___images___file___relativePath'
  | 'projects___images___file___extension'
  | 'projects___images___file___size'
  | 'projects___images___file___prettySize'
  | 'projects___images___file___modifiedTime'
  | 'projects___images___file___accessTime'
  | 'projects___images___file___changeTime'
  | 'projects___images___file___birthTime'
  | 'projects___images___file___root'
  | 'projects___images___file___dir'
  | 'projects___images___file___base'
  | 'projects___images___file___ext'
  | 'projects___images___file___name'
  | 'projects___images___file___relativeDirectory'
  | 'projects___images___file___dev'
  | 'projects___images___file___mode'
  | 'projects___images___file___nlink'
  | 'projects___images___file___uid'
  | 'projects___images___file___gid'
  | 'projects___images___file___rdev'
  | 'projects___images___file___ino'
  | 'projects___images___file___atimeMs'
  | 'projects___images___file___mtimeMs'
  | 'projects___images___file___ctimeMs'
  | 'projects___images___file___atime'
  | 'projects___images___file___mtime'
  | 'projects___images___file___ctime'
  | 'projects___images___file___birthtime'
  | 'projects___images___file___birthtimeMs'
  | 'projects___images___file___blksize'
  | 'projects___images___file___blocks'
  | 'projects___images___file___url'
  | 'projects___images___file___publicURL'
  | 'projects___images___file___childrenImageSharp'
  | 'projects___images___file___id'
  | 'projects___images___file___children'
  | 'projects___images___name'
  | 'projects___images___alternativeText'
  | 'projects___images___caption'
  | 'projects___images___width'
  | 'projects___images___height'
  | 'projects___images___formats'
  | 'projects___images___hash'
  | 'projects___images___ext'
  | 'projects___images___mime'
  | 'projects___images___size'
  | 'projects___images___url'
  | 'projects___images___previewUrl'
  | 'projects___images___provider'
  | 'projects___images___provider_metadata'
  | 'projects___images___createdAt'
  | 'projects___images___updatedAt'
  | 'projects___images____xtypename'
  | 'projects___images___data____xtypename'
  | 'projects___images___data___id'
  | 'projects___images___nodeId'
  | 'projects___images___id'
  | 'projects___images___parent___id'
  | 'projects___images___parent___children'
  | 'projects___images___children'
  | 'projects___images___children___id'
  | 'projects___images___children___children'
  | 'projects___images___internal___content'
  | 'projects___images___internal___contentDigest'
  | 'projects___images___internal___description'
  | 'projects___images___internal___fieldOwners'
  | 'projects___images___internal___ignoreType'
  | 'projects___images___internal___mediaType'
  | 'projects___images___internal___owner'
  | 'projects___images___internal___type'
  | 'projects___tags'
  | 'projects___tags___strapiId'
  | 'projects___tags___name'
  | 'projects___tags___projects'
  | 'projects___tags___projects___strapiId'
  | 'projects___tags___projects___title'
  | 'projects___tags___projects___name'
  | 'projects___tags___projects___description'
  | 'projects___tags___projects___slug'
  | 'projects___tags___projects___images'
  | 'projects___tags___projects___tags'
  | 'projects___tags___projects___areas'
  | 'projects___tags___projects___createdAt'
  | 'projects___tags___projects___updatedAt'
  | 'projects___tags___projects___publishedAt'
  | 'projects___tags___projects____xtypename'
  | 'projects___tags___projects___id'
  | 'projects___tags___projects___children'
  | 'projects___tags___areas'
  | 'projects___tags___areas___strapiId'
  | 'projects___tags___areas___name'
  | 'projects___tags___areas___description'
  | 'projects___tags___areas___color'
  | 'projects___tags___areas___slug'
  | 'projects___tags___areas___tags'
  | 'projects___tags___areas___projects'
  | 'projects___tags___areas___createdAt'
  | 'projects___tags___areas___updatedAt'
  | 'projects___tags___areas___publishedAt'
  | 'projects___tags___areas____xtypename'
  | 'projects___tags___areas___id'
  | 'projects___tags___areas___children'
  | 'projects___tags___createdAt'
  | 'projects___tags___updatedAt'
  | 'projects___tags___publishedAt'
  | 'projects___tags____xtypename'
  | 'projects___tags___id'
  | 'projects___tags___parent___id'
  | 'projects___tags___parent___children'
  | 'projects___tags___children'
  | 'projects___tags___children___id'
  | 'projects___tags___children___children'
  | 'projects___tags___internal___content'
  | 'projects___tags___internal___contentDigest'
  | 'projects___tags___internal___description'
  | 'projects___tags___internal___fieldOwners'
  | 'projects___tags___internal___ignoreType'
  | 'projects___tags___internal___mediaType'
  | 'projects___tags___internal___owner'
  | 'projects___tags___internal___type'
  | 'projects___areas'
  | 'projects___areas___strapiId'
  | 'projects___areas___name'
  | 'projects___areas___description'
  | 'projects___areas___color'
  | 'projects___areas___slug'
  | 'projects___areas___tags'
  | 'projects___areas___tags___strapiId'
  | 'projects___areas___tags___name'
  | 'projects___areas___tags___projects'
  | 'projects___areas___tags___areas'
  | 'projects___areas___tags___createdAt'
  | 'projects___areas___tags___updatedAt'
  | 'projects___areas___tags___publishedAt'
  | 'projects___areas___tags____xtypename'
  | 'projects___areas___tags___id'
  | 'projects___areas___tags___children'
  | 'projects___areas___projects'
  | 'projects___areas___projects___strapiId'
  | 'projects___areas___projects___title'
  | 'projects___areas___projects___name'
  | 'projects___areas___projects___description'
  | 'projects___areas___projects___slug'
  | 'projects___areas___projects___images'
  | 'projects___areas___projects___tags'
  | 'projects___areas___projects___areas'
  | 'projects___areas___projects___createdAt'
  | 'projects___areas___projects___updatedAt'
  | 'projects___areas___projects___publishedAt'
  | 'projects___areas___projects____xtypename'
  | 'projects___areas___projects___id'
  | 'projects___areas___projects___children'
  | 'projects___areas___createdAt'
  | 'projects___areas___updatedAt'
  | 'projects___areas___publishedAt'
  | 'projects___areas____xtypename'
  | 'projects___areas___id'
  | 'projects___areas___parent___id'
  | 'projects___areas___parent___children'
  | 'projects___areas___children'
  | 'projects___areas___children___id'
  | 'projects___areas___children___children'
  | 'projects___areas___internal___content'
  | 'projects___areas___internal___contentDigest'
  | 'projects___areas___internal___description'
  | 'projects___areas___internal___fieldOwners'
  | 'projects___areas___internal___ignoreType'
  | 'projects___areas___internal___mediaType'
  | 'projects___areas___internal___owner'
  | 'projects___areas___internal___type'
  | 'projects___organization___strapiId'
  | 'projects___organization___name'
  | 'projects___organization___link'
  | 'projects___organization___projects'
  | 'projects___organization___projects___strapiId'
  | 'projects___organization___projects___title'
  | 'projects___organization___projects___name'
  | 'projects___organization___projects___description'
  | 'projects___organization___projects___slug'
  | 'projects___organization___projects___images'
  | 'projects___organization___projects___tags'
  | 'projects___organization___projects___areas'
  | 'projects___organization___projects___createdAt'
  | 'projects___organization___projects___updatedAt'
  | 'projects___organization___projects___publishedAt'
  | 'projects___organization___projects____xtypename'
  | 'projects___organization___projects___id'
  | 'projects___organization___projects___children'
  | 'projects___organization___createdAt'
  | 'projects___organization___updatedAt'
  | 'projects___organization___publishedAt'
  | 'projects___organization____xtypename'
  | 'projects___organization___data____xtypename'
  | 'projects___organization___data___id'
  | 'projects___organization___nodeId'
  | 'projects___organization___id'
  | 'projects___organization___parent___id'
  | 'projects___organization___parent___children'
  | 'projects___organization___children'
  | 'projects___organization___children___id'
  | 'projects___organization___children___children'
  | 'projects___organization___internal___content'
  | 'projects___organization___internal___contentDigest'
  | 'projects___organization___internal___description'
  | 'projects___organization___internal___fieldOwners'
  | 'projects___organization___internal___ignoreType'
  | 'projects___organization___internal___mediaType'
  | 'projects___organization___internal___owner'
  | 'projects___organization___internal___type'
  | 'projects___createdAt'
  | 'projects___updatedAt'
  | 'projects___publishedAt'
  | 'projects____xtypename'
  | 'projects___id'
  | 'projects___parent___id'
  | 'projects___parent___parent___id'
  | 'projects___parent___parent___children'
  | 'projects___parent___children'
  | 'projects___parent___children___id'
  | 'projects___parent___children___children'
  | 'projects___parent___internal___content'
  | 'projects___parent___internal___contentDigest'
  | 'projects___parent___internal___description'
  | 'projects___parent___internal___fieldOwners'
  | 'projects___parent___internal___ignoreType'
  | 'projects___parent___internal___mediaType'
  | 'projects___parent___internal___owner'
  | 'projects___parent___internal___type'
  | 'projects___children'
  | 'projects___children___id'
  | 'projects___children___parent___id'
  | 'projects___children___parent___children'
  | 'projects___children___children'
  | 'projects___children___children___id'
  | 'projects___children___children___children'
  | 'projects___children___internal___content'
  | 'projects___children___internal___contentDigest'
  | 'projects___children___internal___description'
  | 'projects___children___internal___fieldOwners'
  | 'projects___children___internal___ignoreType'
  | 'projects___children___internal___mediaType'
  | 'projects___children___internal___owner'
  | 'projects___children___internal___type'
  | 'projects___internal___content'
  | 'projects___internal___contentDigest'
  | 'projects___internal___description'
  | 'projects___internal___fieldOwners'
  | 'projects___internal___ignoreType'
  | 'projects___internal___mediaType'
  | 'projects___internal___owner'
  | 'projects___internal___type'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | '_xtypename'
  | 'data____xtypename'
  | 'data___id'
  | 'nodeId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type StrapiOrganizationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiOrganizationEdge>;
  nodes: Array<StrapiOrganization>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiOrganizationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiOrganizationGroupConnectionDistinctArgs = {
  field: StrapiOrganizationFieldsEnum;
};


export type StrapiOrganizationGroupConnectionMaxArgs = {
  field: StrapiOrganizationFieldsEnum;
};


export type StrapiOrganizationGroupConnectionMinArgs = {
  field: StrapiOrganizationFieldsEnum;
};


export type StrapiOrganizationGroupConnectionSumArgs = {
  field: StrapiOrganizationFieldsEnum;
};


export type StrapiOrganizationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiOrganizationFieldsEnum;
};

export type StrapiOrganizationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiOrganizationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StrapiComponentSharedProfileFilterInput = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  picture?: InputMaybe<StrapiUploadFileFilterInput>;
  qualities?: InputMaybe<StrapiComponentSharedTextItemFilterListInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
};

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type StrapiComponentSharedTextItemFilterListInput = {
  elemMatch?: InputMaybe<StrapiComponentSharedTextItemFilterInput>;
};

export type StrapiComponentSharedTextItemFilterInput = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
};

export type StrapiComponentSharedSeoFilterInput = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  metaTitle?: InputMaybe<StringQueryOperatorInput>;
  metaDescription?: InputMaybe<StringQueryOperatorInput>;
  shareImage?: InputMaybe<StrapiUploadFileFilterInput>;
};

export type StrapiHomeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiHomeEdge>;
  nodes: Array<StrapiHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiHomeGroupConnection>;
};


export type StrapiHomeConnectionDistinctArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeConnectionMaxArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeConnectionMinArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeConnectionSumArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiHomeFieldsEnum;
};

export type StrapiHomeEdge = {
  next?: Maybe<StrapiHome>;
  node: StrapiHome;
  previous?: Maybe<StrapiHome>;
};

export type StrapiHomeFieldsEnum =
  | 'strapiId'
  | 'title'
  | 'introText'
  | 'profile___strapiId'
  | 'profile___id'
  | 'profile___picture___strapiId'
  | 'profile___picture___file___sourceInstanceName'
  | 'profile___picture___file___absolutePath'
  | 'profile___picture___file___relativePath'
  | 'profile___picture___file___extension'
  | 'profile___picture___file___size'
  | 'profile___picture___file___prettySize'
  | 'profile___picture___file___modifiedTime'
  | 'profile___picture___file___accessTime'
  | 'profile___picture___file___changeTime'
  | 'profile___picture___file___birthTime'
  | 'profile___picture___file___root'
  | 'profile___picture___file___dir'
  | 'profile___picture___file___base'
  | 'profile___picture___file___ext'
  | 'profile___picture___file___name'
  | 'profile___picture___file___relativeDirectory'
  | 'profile___picture___file___dev'
  | 'profile___picture___file___mode'
  | 'profile___picture___file___nlink'
  | 'profile___picture___file___uid'
  | 'profile___picture___file___gid'
  | 'profile___picture___file___rdev'
  | 'profile___picture___file___ino'
  | 'profile___picture___file___atimeMs'
  | 'profile___picture___file___mtimeMs'
  | 'profile___picture___file___ctimeMs'
  | 'profile___picture___file___atime'
  | 'profile___picture___file___mtime'
  | 'profile___picture___file___ctime'
  | 'profile___picture___file___birthtime'
  | 'profile___picture___file___birthtimeMs'
  | 'profile___picture___file___blksize'
  | 'profile___picture___file___blocks'
  | 'profile___picture___file___url'
  | 'profile___picture___file___publicURL'
  | 'profile___picture___file___childrenImageSharp'
  | 'profile___picture___file___id'
  | 'profile___picture___file___children'
  | 'profile___picture___name'
  | 'profile___picture___alternativeText'
  | 'profile___picture___caption'
  | 'profile___picture___width'
  | 'profile___picture___height'
  | 'profile___picture___formats'
  | 'profile___picture___hash'
  | 'profile___picture___ext'
  | 'profile___picture___mime'
  | 'profile___picture___size'
  | 'profile___picture___url'
  | 'profile___picture___previewUrl'
  | 'profile___picture___provider'
  | 'profile___picture___provider_metadata'
  | 'profile___picture___createdAt'
  | 'profile___picture___updatedAt'
  | 'profile___picture____xtypename'
  | 'profile___picture___data____xtypename'
  | 'profile___picture___data___id'
  | 'profile___picture___nodeId'
  | 'profile___picture___id'
  | 'profile___picture___parent___id'
  | 'profile___picture___parent___children'
  | 'profile___picture___children'
  | 'profile___picture___children___id'
  | 'profile___picture___children___children'
  | 'profile___picture___internal___content'
  | 'profile___picture___internal___contentDigest'
  | 'profile___picture___internal___description'
  | 'profile___picture___internal___fieldOwners'
  | 'profile___picture___internal___ignoreType'
  | 'profile___picture___internal___mediaType'
  | 'profile___picture___internal___owner'
  | 'profile___picture___internal___type'
  | 'profile___qualities'
  | 'profile___qualities___strapiId'
  | 'profile___qualities___id'
  | 'profile___qualities___text'
  | 'profile___qualities____xtypename'
  | 'profile____xtypename'
  | 'seo___strapiId'
  | 'seo___id'
  | 'seo___metaTitle'
  | 'seo___metaDescription'
  | 'seo___shareImage___strapiId'
  | 'seo___shareImage___file___sourceInstanceName'
  | 'seo___shareImage___file___absolutePath'
  | 'seo___shareImage___file___relativePath'
  | 'seo___shareImage___file___extension'
  | 'seo___shareImage___file___size'
  | 'seo___shareImage___file___prettySize'
  | 'seo___shareImage___file___modifiedTime'
  | 'seo___shareImage___file___accessTime'
  | 'seo___shareImage___file___changeTime'
  | 'seo___shareImage___file___birthTime'
  | 'seo___shareImage___file___root'
  | 'seo___shareImage___file___dir'
  | 'seo___shareImage___file___base'
  | 'seo___shareImage___file___ext'
  | 'seo___shareImage___file___name'
  | 'seo___shareImage___file___relativeDirectory'
  | 'seo___shareImage___file___dev'
  | 'seo___shareImage___file___mode'
  | 'seo___shareImage___file___nlink'
  | 'seo___shareImage___file___uid'
  | 'seo___shareImage___file___gid'
  | 'seo___shareImage___file___rdev'
  | 'seo___shareImage___file___ino'
  | 'seo___shareImage___file___atimeMs'
  | 'seo___shareImage___file___mtimeMs'
  | 'seo___shareImage___file___ctimeMs'
  | 'seo___shareImage___file___atime'
  | 'seo___shareImage___file___mtime'
  | 'seo___shareImage___file___ctime'
  | 'seo___shareImage___file___birthtime'
  | 'seo___shareImage___file___birthtimeMs'
  | 'seo___shareImage___file___blksize'
  | 'seo___shareImage___file___blocks'
  | 'seo___shareImage___file___url'
  | 'seo___shareImage___file___publicURL'
  | 'seo___shareImage___file___childrenImageSharp'
  | 'seo___shareImage___file___id'
  | 'seo___shareImage___file___children'
  | 'seo___shareImage___name'
  | 'seo___shareImage___alternativeText'
  | 'seo___shareImage___caption'
  | 'seo___shareImage___width'
  | 'seo___shareImage___height'
  | 'seo___shareImage___formats'
  | 'seo___shareImage___hash'
  | 'seo___shareImage___ext'
  | 'seo___shareImage___mime'
  | 'seo___shareImage___size'
  | 'seo___shareImage___url'
  | 'seo___shareImage___previewUrl'
  | 'seo___shareImage___provider'
  | 'seo___shareImage___provider_metadata'
  | 'seo___shareImage___createdAt'
  | 'seo___shareImage___updatedAt'
  | 'seo___shareImage____xtypename'
  | 'seo___shareImage___data____xtypename'
  | 'seo___shareImage___data___id'
  | 'seo___shareImage___nodeId'
  | 'seo___shareImage___id'
  | 'seo___shareImage___parent___id'
  | 'seo___shareImage___parent___children'
  | 'seo___shareImage___children'
  | 'seo___shareImage___children___id'
  | 'seo___shareImage___children___children'
  | 'seo___shareImage___internal___content'
  | 'seo___shareImage___internal___contentDigest'
  | 'seo___shareImage___internal___description'
  | 'seo___shareImage___internal___fieldOwners'
  | 'seo___shareImage___internal___ignoreType'
  | 'seo___shareImage___internal___mediaType'
  | 'seo___shareImage___internal___owner'
  | 'seo___shareImage___internal___type'
  | 'areas'
  | 'areas___strapiId'
  | 'areas___name'
  | 'areas___description'
  | 'areas___color'
  | 'areas___slug'
  | 'areas___tags'
  | 'areas___tags___strapiId'
  | 'areas___tags___name'
  | 'areas___tags___projects'
  | 'areas___tags___projects___strapiId'
  | 'areas___tags___projects___title'
  | 'areas___tags___projects___name'
  | 'areas___tags___projects___description'
  | 'areas___tags___projects___slug'
  | 'areas___tags___projects___images'
  | 'areas___tags___projects___tags'
  | 'areas___tags___projects___areas'
  | 'areas___tags___projects___createdAt'
  | 'areas___tags___projects___updatedAt'
  | 'areas___tags___projects___publishedAt'
  | 'areas___tags___projects____xtypename'
  | 'areas___tags___projects___id'
  | 'areas___tags___projects___children'
  | 'areas___tags___areas'
  | 'areas___tags___areas___strapiId'
  | 'areas___tags___areas___name'
  | 'areas___tags___areas___description'
  | 'areas___tags___areas___color'
  | 'areas___tags___areas___slug'
  | 'areas___tags___areas___tags'
  | 'areas___tags___areas___projects'
  | 'areas___tags___areas___createdAt'
  | 'areas___tags___areas___updatedAt'
  | 'areas___tags___areas___publishedAt'
  | 'areas___tags___areas____xtypename'
  | 'areas___tags___areas___id'
  | 'areas___tags___areas___children'
  | 'areas___tags___createdAt'
  | 'areas___tags___updatedAt'
  | 'areas___tags___publishedAt'
  | 'areas___tags____xtypename'
  | 'areas___tags___id'
  | 'areas___tags___parent___id'
  | 'areas___tags___parent___children'
  | 'areas___tags___children'
  | 'areas___tags___children___id'
  | 'areas___tags___children___children'
  | 'areas___tags___internal___content'
  | 'areas___tags___internal___contentDigest'
  | 'areas___tags___internal___description'
  | 'areas___tags___internal___fieldOwners'
  | 'areas___tags___internal___ignoreType'
  | 'areas___tags___internal___mediaType'
  | 'areas___tags___internal___owner'
  | 'areas___tags___internal___type'
  | 'areas___projects'
  | 'areas___projects___strapiId'
  | 'areas___projects___title'
  | 'areas___projects___name'
  | 'areas___projects___description'
  | 'areas___projects___slug'
  | 'areas___projects___coverImage___strapiId'
  | 'areas___projects___coverImage___name'
  | 'areas___projects___coverImage___alternativeText'
  | 'areas___projects___coverImage___caption'
  | 'areas___projects___coverImage___width'
  | 'areas___projects___coverImage___height'
  | 'areas___projects___coverImage___formats'
  | 'areas___projects___coverImage___hash'
  | 'areas___projects___coverImage___ext'
  | 'areas___projects___coverImage___mime'
  | 'areas___projects___coverImage___size'
  | 'areas___projects___coverImage___url'
  | 'areas___projects___coverImage___previewUrl'
  | 'areas___projects___coverImage___provider'
  | 'areas___projects___coverImage___provider_metadata'
  | 'areas___projects___coverImage___createdAt'
  | 'areas___projects___coverImage___updatedAt'
  | 'areas___projects___coverImage____xtypename'
  | 'areas___projects___coverImage___nodeId'
  | 'areas___projects___coverImage___id'
  | 'areas___projects___coverImage___children'
  | 'areas___projects___images'
  | 'areas___projects___images___strapiId'
  | 'areas___projects___images___name'
  | 'areas___projects___images___alternativeText'
  | 'areas___projects___images___caption'
  | 'areas___projects___images___width'
  | 'areas___projects___images___height'
  | 'areas___projects___images___formats'
  | 'areas___projects___images___hash'
  | 'areas___projects___images___ext'
  | 'areas___projects___images___mime'
  | 'areas___projects___images___size'
  | 'areas___projects___images___url'
  | 'areas___projects___images___previewUrl'
  | 'areas___projects___images___provider'
  | 'areas___projects___images___provider_metadata'
  | 'areas___projects___images___createdAt'
  | 'areas___projects___images___updatedAt'
  | 'areas___projects___images____xtypename'
  | 'areas___projects___images___nodeId'
  | 'areas___projects___images___id'
  | 'areas___projects___images___children'
  | 'areas___projects___tags'
  | 'areas___projects___tags___strapiId'
  | 'areas___projects___tags___name'
  | 'areas___projects___tags___projects'
  | 'areas___projects___tags___areas'
  | 'areas___projects___tags___createdAt'
  | 'areas___projects___tags___updatedAt'
  | 'areas___projects___tags___publishedAt'
  | 'areas___projects___tags____xtypename'
  | 'areas___projects___tags___id'
  | 'areas___projects___tags___children'
  | 'areas___projects___areas'
  | 'areas___projects___areas___strapiId'
  | 'areas___projects___areas___name'
  | 'areas___projects___areas___description'
  | 'areas___projects___areas___color'
  | 'areas___projects___areas___slug'
  | 'areas___projects___areas___tags'
  | 'areas___projects___areas___projects'
  | 'areas___projects___areas___createdAt'
  | 'areas___projects___areas___updatedAt'
  | 'areas___projects___areas___publishedAt'
  | 'areas___projects___areas____xtypename'
  | 'areas___projects___areas___id'
  | 'areas___projects___areas___children'
  | 'areas___projects___organization___strapiId'
  | 'areas___projects___organization___name'
  | 'areas___projects___organization___link'
  | 'areas___projects___organization___projects'
  | 'areas___projects___organization___createdAt'
  | 'areas___projects___organization___updatedAt'
  | 'areas___projects___organization___publishedAt'
  | 'areas___projects___organization____xtypename'
  | 'areas___projects___organization___nodeId'
  | 'areas___projects___organization___id'
  | 'areas___projects___organization___children'
  | 'areas___projects___createdAt'
  | 'areas___projects___updatedAt'
  | 'areas___projects___publishedAt'
  | 'areas___projects____xtypename'
  | 'areas___projects___id'
  | 'areas___projects___parent___id'
  | 'areas___projects___parent___children'
  | 'areas___projects___children'
  | 'areas___projects___children___id'
  | 'areas___projects___children___children'
  | 'areas___projects___internal___content'
  | 'areas___projects___internal___contentDigest'
  | 'areas___projects___internal___description'
  | 'areas___projects___internal___fieldOwners'
  | 'areas___projects___internal___ignoreType'
  | 'areas___projects___internal___mediaType'
  | 'areas___projects___internal___owner'
  | 'areas___projects___internal___type'
  | 'areas___createdAt'
  | 'areas___updatedAt'
  | 'areas___publishedAt'
  | 'areas____xtypename'
  | 'areas___id'
  | 'areas___parent___id'
  | 'areas___parent___parent___id'
  | 'areas___parent___parent___children'
  | 'areas___parent___children'
  | 'areas___parent___children___id'
  | 'areas___parent___children___children'
  | 'areas___parent___internal___content'
  | 'areas___parent___internal___contentDigest'
  | 'areas___parent___internal___description'
  | 'areas___parent___internal___fieldOwners'
  | 'areas___parent___internal___ignoreType'
  | 'areas___parent___internal___mediaType'
  | 'areas___parent___internal___owner'
  | 'areas___parent___internal___type'
  | 'areas___children'
  | 'areas___children___id'
  | 'areas___children___parent___id'
  | 'areas___children___parent___children'
  | 'areas___children___children'
  | 'areas___children___children___id'
  | 'areas___children___children___children'
  | 'areas___children___internal___content'
  | 'areas___children___internal___contentDigest'
  | 'areas___children___internal___description'
  | 'areas___children___internal___fieldOwners'
  | 'areas___children___internal___ignoreType'
  | 'areas___children___internal___mediaType'
  | 'areas___children___internal___owner'
  | 'areas___children___internal___type'
  | 'areas___internal___content'
  | 'areas___internal___contentDigest'
  | 'areas___internal___description'
  | 'areas___internal___fieldOwners'
  | 'areas___internal___ignoreType'
  | 'areas___internal___mediaType'
  | 'areas___internal___owner'
  | 'areas___internal___type'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | '_xtypename'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type StrapiHomeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiHomeEdge>;
  nodes: Array<StrapiHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StrapiHomeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StrapiHomeGroupConnectionDistinctArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeGroupConnectionMaxArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeGroupConnectionMinArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeGroupConnectionSumArgs = {
  field: StrapiHomeFieldsEnum;
};


export type StrapiHomeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StrapiHomeFieldsEnum;
};

export type StrapiHomeFilterInput = {
  strapiId?: InputMaybe<IntQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  introText?: InputMaybe<StringQueryOperatorInput>;
  profile?: InputMaybe<StrapiComponentSharedProfileFilterInput>;
  seo?: InputMaybe<StrapiComponentSharedSeoFilterInput>;
  areas?: InputMaybe<StrapiAreaFilterListInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  _xtypename?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type StrapiHomeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StrapiHomeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StaticImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StaticImageGroupConnection>;
};


export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StaticImageFieldsEnum;
};

export type StaticImageEdge = {
  next?: Maybe<StaticImage>;
  node: StaticImage;
  previous?: Maybe<StaticImage>;
};

export type StaticImageFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'sourceInstanceName'
  | 'relativePath'
  | 'extension'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'absolutePath'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'rdev'
  | 'blksize'
  | 'ino'
  | 'size'
  | 'blocks'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'birthtimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime';

export type StaticImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StaticImageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StaticImageGroupConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StaticImageFieldsEnum;
};

export type StaticImageFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
};

export type StaticImageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StaticImageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type NavDataQueryVariables = Exact<{ [key: string]: never; }>;


export type NavDataQuery = { site?: { siteMetadata?: { siteURL?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined };

export type AreaDetailFragment = { id: string, slug?: string | null | undefined, name: string, description: string, color?: string | null | undefined, projects?: Array<{ id: string, images?: Array<{ alternativeText?: string | null | undefined, file?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, tags?: Array<{ id: string, name: string } | null | undefined> | null | undefined };

export type ProfileFragment = { picture?: { alternativeText?: string | null | undefined, file?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, qualities: Array<{ text: string } | null | undefined> };

export type ProjectsNavDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsNavDataQuery = { allStrapiArea: { edges: Array<{ node: { id: string, name: string, color?: string | null | undefined, slug?: string | null | undefined, projects?: Array<{ id: string } | null | undefined> | null | undefined } }> } };

export type HomeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeDataQuery = { strapiHome?: { title: string, introText: string, profile: { picture?: { alternativeText?: string | null | undefined, file?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, qualities: Array<{ text: string } | null | undefined> }, seo?: { metaTitle: string } | null | undefined, areas?: Array<{ id: string, name: string, description: string } | null | undefined> | null | undefined } | null | undefined, allStrapiArea: { edges: Array<{ node: { id: string, slug?: string | null | undefined, name: string, description: string, color?: string | null | undefined, projects?: Array<{ id: string, title: string, slug: string, images?: Array<{ alternativeText?: string | null | undefined, file?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, tags?: Array<{ id: string, name: string } | null | undefined> | null | undefined } }> } };

export type ProjectsPageDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsPageDataQuery = { allStrapiProject: { totalCount: number, edges: Array<{ node: { id: string, title: string, name: string, slug: string, description: string, organization?: { id: string, name: string, link?: string | null | undefined } | null | undefined, coverImage?: { id: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, file?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, images?: Array<{ id: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, file?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined> | null | undefined, tags?: Array<{ id: string, name: string } | null | undefined> | null | undefined, areas?: Array<{ id: string, slug?: string | null | undefined, name: string, description: string, color?: string | null | undefined } | null | undefined> | null | undefined } }> }, allStrapiArea: { edges: Array<{ node: { id: string, slug?: string | null | undefined, name: string, description: string, color?: string | null | undefined } }> } };

export type ImageBaseFragment = { id: string, alternativeText?: string | null | undefined, caption?: string | null | undefined };

export type AreaBaseFragment = { id: string, slug?: string | null | undefined, name: string, description: string, color?: string | null | undefined };

export type ProjectDetailFragment = { id: string, title: string, name: string, slug: string, description: string, organization?: { id: string, name: string, link?: string | null | undefined } | null | undefined, coverImage?: { id: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, file?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, images?: Array<{ id: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, file?: { childImageSharp?: { gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined> | null | undefined, tags?: Array<{ id: string, name: string } | null | undefined> | null | undefined, areas?: Array<{ id: string, slug?: string | null | undefined, name: string, description: string, color?: string | null | undefined } | null | undefined> | null | undefined };

export type GatsbyImageSharpFixedFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };
