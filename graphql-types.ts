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
  trailingSlash?: Maybe<Scalars['String']>;
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

export type Strapi__Media = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Strapi__MediaFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  localFile?: Maybe<File>;
  strapi_id?: Maybe<Scalars['Int']>;
};


export type Strapi__MediaCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi__MediaUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Strapi__MediaFormats = {
  small?: Maybe<Strapi__MediaFormatsSmall>;
  medium?: Maybe<Strapi__MediaFormatsMedium>;
  thumbnail?: Maybe<Strapi__MediaFormatsThumbnail>;
  large?: Maybe<Strapi__MediaFormatsLarge>;
};

export type Strapi__MediaFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Strapi__MediaFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Strapi__MediaFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Strapi__MediaFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Strapi__Component_Shared_Text_Item = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  strapi_id?: Maybe<Scalars['Int']>;
};

export type Strapi__Component_Shared_Seo = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  strapi_id?: Maybe<Scalars['Int']>;
};

export type Strapi__Component_Shared_Profile = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  picture?: Maybe<Strapi__Media>;
  qualities?: Maybe<Array<Maybe<Strapi__Component_Shared_Text_Item>>>;
  strapi_id?: Maybe<Scalars['Int']>;
};

export type Strapi__Component_Shared_Links = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  link?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  strapi_id?: Maybe<Scalars['Int']>;
};

export type Strapi__Component_Shared_Contact = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  button?: Maybe<Strapi__Component_Shared_Links>;
  strapi_id?: Maybe<Scalars['Int']>;
};

export type Strapi_Tag = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  projects?: Maybe<Array<Maybe<Strapi_Project>>>;
  areas?: Maybe<Array<Maybe<Strapi_Area>>>;
  strapi_id?: Maybe<Scalars['Int']>;
};


export type Strapi_TagCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_TagUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_TagPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Strapi_Project_Description_Textnode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
};

export type Strapi_Project = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Strapi_ProjectDescription>;
  slug?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  coverImage?: Maybe<Strapi__Media>;
  images?: Maybe<Array<Maybe<Strapi__Media>>>;
  tags?: Maybe<Array<Maybe<Strapi_Tag>>>;
  areas?: Maybe<Array<Maybe<Strapi_Area>>>;
  organization?: Maybe<Strapi_Organization>;
  links?: Maybe<Array<Maybe<Strapi__Component_Shared_Links>>>;
  strapi_id?: Maybe<Scalars['Int']>;
  /** Returns all children nodes filtered by type STRAPI_PROJECT_DESCRIPTION_TEXTNODE */
  childrenStrapiProjectDescriptionTextnode?: Maybe<Array<Maybe<Strapi_Project_Description_Textnode>>>;
  /** Returns the first child node of type STRAPI_PROJECT_DESCRIPTION_TEXTNODE or null if there are no children of given type on this node */
  childStrapiProjectDescriptionTextnode?: Maybe<Strapi_Project_Description_Textnode>;
};


export type Strapi_ProjectCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_ProjectUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_ProjectPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Strapi_ProjectDescription = {
  medias?: Maybe<Array<Maybe<Strapi_ProjectDescriptionMedias>>>;
  data?: Maybe<Strapi_Project_Description_Textnode>;
};

export type Strapi_ProjectDescriptionMedias = {
  alternativeText?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
  file?: Maybe<Strapi_ProjectDescriptionMediasFile>;
};

export type Strapi_ProjectDescriptionMediasFile = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Strapi_ProjectDescriptionMediasFileFormats>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type Strapi_ProjectDescriptionMediasFileCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_ProjectDescriptionMediasFileUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Strapi_ProjectDescriptionMediasFileFormats = {
  large?: Maybe<Strapi_ProjectDescriptionMediasFileFormatsLarge>;
  small?: Maybe<Strapi_ProjectDescriptionMediasFileFormatsSmall>;
  medium?: Maybe<Strapi_ProjectDescriptionMediasFileFormatsMedium>;
  thumbnail?: Maybe<Strapi_ProjectDescriptionMediasFileFormatsThumbnail>;
};

export type Strapi_ProjectDescriptionMediasFileFormatsLarge = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Strapi_ProjectDescriptionMediasFileFormatsSmall = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Strapi_ProjectDescriptionMediasFileFormatsMedium = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Strapi_ProjectDescriptionMediasFileFormatsThumbnail = {
  ext?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Strapi_Organization = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  projects?: Maybe<Array<Maybe<Strapi_Project>>>;
  strapi_id?: Maybe<Scalars['Int']>;
};


export type Strapi_OrganizationCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_OrganizationUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_OrganizationPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Strapi_Home = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  introText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  seo?: Maybe<Strapi__Component_Shared_Seo>;
  contact?: Maybe<Strapi__Component_Shared_Contact>;
  profile?: Maybe<Strapi__Component_Shared_Profile>;
  areas?: Maybe<Array<Maybe<Strapi_Area>>>;
  strapi_id?: Maybe<Scalars['Int']>;
};


export type Strapi_HomeCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_HomeUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_HomePublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Strapi_Area = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Strapi_Tag>>>;
  projects?: Maybe<Array<Maybe<Strapi_Project>>>;
  strapi_id?: Maybe<Scalars['Int']>;
};


export type Strapi_AreaCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_AreaUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Strapi_AreaPublishedAtArgs = {
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
  strapiMedia?: Maybe<Strapi__Media>;
  allStrapiMedia: Strapi__MediaConnection;
  strapiComponentSharedTextItem?: Maybe<Strapi__Component_Shared_Text_Item>;
  allStrapiComponentSharedTextItem: Strapi__Component_Shared_Text_ItemConnection;
  strapiComponentSharedSeo?: Maybe<Strapi__Component_Shared_Seo>;
  allStrapiComponentSharedSeo: Strapi__Component_Shared_SeoConnection;
  strapiComponentSharedProfile?: Maybe<Strapi__Component_Shared_Profile>;
  allStrapiComponentSharedProfile: Strapi__Component_Shared_ProfileConnection;
  strapiComponentSharedLinks?: Maybe<Strapi__Component_Shared_Links>;
  allStrapiComponentSharedLinks: Strapi__Component_Shared_LinksConnection;
  strapiComponentSharedContact?: Maybe<Strapi__Component_Shared_Contact>;
  allStrapiComponentSharedContact: Strapi__Component_Shared_ContactConnection;
  strapiTag?: Maybe<Strapi_Tag>;
  allStrapiTag: Strapi_TagConnection;
  strapiProjectDescriptionTextnode?: Maybe<Strapi_Project_Description_Textnode>;
  allStrapiProjectDescriptionTextnode: Strapi_Project_Description_TextnodeConnection;
  strapiProject?: Maybe<Strapi_Project>;
  allStrapiProject: Strapi_ProjectConnection;
  strapiOrganization?: Maybe<Strapi_Organization>;
  allStrapiOrganization: Strapi_OrganizationConnection;
  strapiHome?: Maybe<Strapi_Home>;
  allStrapiHome: Strapi_HomeConnection;
  strapiArea?: Maybe<Strapi_Area>;
  allStrapiArea: Strapi_AreaConnection;
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
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
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


export type QueryStrapiMediaArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  formats?: InputMaybe<Strapi__MediaFormatsFilterInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiMediaArgs = {
  filter?: InputMaybe<Strapi__MediaFilterInput>;
  sort?: InputMaybe<Strapi__MediaSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiComponentSharedTextItemArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiComponentSharedTextItemArgs = {
  filter?: InputMaybe<Strapi__Component_Shared_Text_ItemFilterInput>;
  sort?: InputMaybe<Strapi__Component_Shared_Text_ItemSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiComponentSharedSeoArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  metaTitle?: InputMaybe<StringQueryOperatorInput>;
  metaDescription?: InputMaybe<StringQueryOperatorInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiComponentSharedSeoArgs = {
  filter?: InputMaybe<Strapi__Component_Shared_SeoFilterInput>;
  sort?: InputMaybe<Strapi__Component_Shared_SeoSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiComponentSharedProfileArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  picture?: InputMaybe<Strapi__MediaFilterInput>;
  qualities?: InputMaybe<Strapi__Component_Shared_Text_ItemFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiComponentSharedProfileArgs = {
  filter?: InputMaybe<Strapi__Component_Shared_ProfileFilterInput>;
  sort?: InputMaybe<Strapi__Component_Shared_ProfileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiComponentSharedLinksArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiComponentSharedLinksArgs = {
  filter?: InputMaybe<Strapi__Component_Shared_LinksFilterInput>;
  sort?: InputMaybe<Strapi__Component_Shared_LinksSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiComponentSharedContactArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  button?: InputMaybe<Strapi__Component_Shared_LinksFilterInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiComponentSharedContactArgs = {
  filter?: InputMaybe<Strapi__Component_Shared_ContactFilterInput>;
  sort?: InputMaybe<Strapi__Component_Shared_ContactSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiTagArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  projects?: InputMaybe<Strapi_ProjectFilterListInput>;
  areas?: InputMaybe<Strapi_AreaFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiTagArgs = {
  filter?: InputMaybe<Strapi_TagFilterInput>;
  sort?: InputMaybe<Strapi_TagSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiProjectDescriptionTextnodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiProjectDescriptionTextnodeArgs = {
  filter?: InputMaybe<Strapi_Project_Description_TextnodeFilterInput>;
  sort?: InputMaybe<Strapi_Project_Description_TextnodeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiProjectArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<Strapi_ProjectDescriptionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  coverImage?: InputMaybe<Strapi__MediaFilterInput>;
  images?: InputMaybe<Strapi__MediaFilterListInput>;
  tags?: InputMaybe<Strapi_TagFilterListInput>;
  areas?: InputMaybe<Strapi_AreaFilterListInput>;
  organization?: InputMaybe<Strapi_OrganizationFilterInput>;
  links?: InputMaybe<Strapi__Component_Shared_LinksFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
  childrenStrapiProjectDescriptionTextnode?: InputMaybe<Strapi_Project_Description_TextnodeFilterListInput>;
  childStrapiProjectDescriptionTextnode?: InputMaybe<Strapi_Project_Description_TextnodeFilterInput>;
};


export type QueryAllStrapiProjectArgs = {
  filter?: InputMaybe<Strapi_ProjectFilterInput>;
  sort?: InputMaybe<Strapi_ProjectSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiOrganizationArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  projects?: InputMaybe<Strapi_ProjectFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiOrganizationArgs = {
  filter?: InputMaybe<Strapi_OrganizationFilterInput>;
  sort?: InputMaybe<Strapi_OrganizationSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiHomeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  introText?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  seo?: InputMaybe<Strapi__Component_Shared_SeoFilterInput>;
  contact?: InputMaybe<Strapi__Component_Shared_ContactFilterInput>;
  profile?: InputMaybe<Strapi__Component_Shared_ProfileFilterInput>;
  areas?: InputMaybe<Strapi_AreaFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiHomeArgs = {
  filter?: InputMaybe<Strapi_HomeFilterInput>;
  sort?: InputMaybe<Strapi_HomeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStrapiAreaArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<Strapi_TagFilterListInput>;
  projects?: InputMaybe<Strapi_ProjectFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiAreaArgs = {
  filter?: InputMaybe<Strapi_AreaFilterInput>;
  sort?: InputMaybe<Strapi_AreaSortInput>;
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
  | 'trailingSlash'
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
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
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

export type Strapi__MediaFormatsFilterInput = {
  small?: InputMaybe<Strapi__MediaFormatsSmallFilterInput>;
  medium?: InputMaybe<Strapi__MediaFormatsMediumFilterInput>;
  thumbnail?: InputMaybe<Strapi__MediaFormatsThumbnailFilterInput>;
  large?: InputMaybe<Strapi__MediaFormatsLargeFilterInput>;
};

export type Strapi__MediaFormatsSmallFilterInput = {
  ext?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__MediaFormatsMediumFilterInput = {
  ext?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__MediaFormatsThumbnailFilterInput = {
  ext?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__MediaFormatsLargeFilterInput = {
  ext?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__MediaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__MediaEdge>;
  nodes: Array<Strapi__Media>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__MediaGroupConnection>;
};


export type Strapi__MediaConnectionDistinctArgs = {
  field: Strapi__MediaFieldsEnum;
};


export type Strapi__MediaConnectionMaxArgs = {
  field: Strapi__MediaFieldsEnum;
};


export type Strapi__MediaConnectionMinArgs = {
  field: Strapi__MediaFieldsEnum;
};


export type Strapi__MediaConnectionSumArgs = {
  field: Strapi__MediaFieldsEnum;
};


export type Strapi__MediaConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__MediaFieldsEnum;
};

export type Strapi__MediaEdge = {
  next?: Maybe<Strapi__Media>;
  node: Strapi__Media;
  previous?: Maybe<Strapi__Media>;
};

export type Strapi__MediaFieldsEnum =
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
  | 'name'
  | 'alternativeText'
  | 'caption'
  | 'width'
  | 'height'
  | 'formats___small___ext'
  | 'formats___small___url'
  | 'formats___small___hash'
  | 'formats___small___mime'
  | 'formats___small___name'
  | 'formats___small___size'
  | 'formats___small___width'
  | 'formats___small___height'
  | 'formats___medium___ext'
  | 'formats___medium___url'
  | 'formats___medium___hash'
  | 'formats___medium___mime'
  | 'formats___medium___name'
  | 'formats___medium___size'
  | 'formats___medium___width'
  | 'formats___medium___height'
  | 'formats___thumbnail___ext'
  | 'formats___thumbnail___url'
  | 'formats___thumbnail___hash'
  | 'formats___thumbnail___mime'
  | 'formats___thumbnail___name'
  | 'formats___thumbnail___size'
  | 'formats___thumbnail___width'
  | 'formats___thumbnail___height'
  | 'formats___large___ext'
  | 'formats___large___url'
  | 'formats___large___hash'
  | 'formats___large___mime'
  | 'formats___large___name'
  | 'formats___large___size'
  | 'formats___large___width'
  | 'formats___large___height'
  | 'hash'
  | 'ext'
  | 'mime'
  | 'size'
  | 'url'
  | 'createdAt'
  | 'updatedAt'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___publicURL'
  | 'localFile___childrenImageSharp'
  | 'localFile___childrenImageSharp___fixed___base64'
  | 'localFile___childrenImageSharp___fixed___tracedSVG'
  | 'localFile___childrenImageSharp___fixed___aspectRatio'
  | 'localFile___childrenImageSharp___fixed___width'
  | 'localFile___childrenImageSharp___fixed___height'
  | 'localFile___childrenImageSharp___fixed___src'
  | 'localFile___childrenImageSharp___fixed___srcSet'
  | 'localFile___childrenImageSharp___fixed___srcWebp'
  | 'localFile___childrenImageSharp___fixed___srcSetWebp'
  | 'localFile___childrenImageSharp___fixed___originalName'
  | 'localFile___childrenImageSharp___fluid___base64'
  | 'localFile___childrenImageSharp___fluid___tracedSVG'
  | 'localFile___childrenImageSharp___fluid___aspectRatio'
  | 'localFile___childrenImageSharp___fluid___src'
  | 'localFile___childrenImageSharp___fluid___srcSet'
  | 'localFile___childrenImageSharp___fluid___srcWebp'
  | 'localFile___childrenImageSharp___fluid___srcSetWebp'
  | 'localFile___childrenImageSharp___fluid___sizes'
  | 'localFile___childrenImageSharp___fluid___originalImg'
  | 'localFile___childrenImageSharp___fluid___originalName'
  | 'localFile___childrenImageSharp___fluid___presentationWidth'
  | 'localFile___childrenImageSharp___fluid___presentationHeight'
  | 'localFile___childrenImageSharp___gatsbyImageData'
  | 'localFile___childrenImageSharp___original___width'
  | 'localFile___childrenImageSharp___original___height'
  | 'localFile___childrenImageSharp___original___src'
  | 'localFile___childrenImageSharp___resize___src'
  | 'localFile___childrenImageSharp___resize___tracedSVG'
  | 'localFile___childrenImageSharp___resize___width'
  | 'localFile___childrenImageSharp___resize___height'
  | 'localFile___childrenImageSharp___resize___aspectRatio'
  | 'localFile___childrenImageSharp___resize___originalName'
  | 'localFile___childrenImageSharp___id'
  | 'localFile___childrenImageSharp___parent___id'
  | 'localFile___childrenImageSharp___parent___children'
  | 'localFile___childrenImageSharp___children'
  | 'localFile___childrenImageSharp___children___id'
  | 'localFile___childrenImageSharp___children___children'
  | 'localFile___childrenImageSharp___internal___content'
  | 'localFile___childrenImageSharp___internal___contentDigest'
  | 'localFile___childrenImageSharp___internal___description'
  | 'localFile___childrenImageSharp___internal___fieldOwners'
  | 'localFile___childrenImageSharp___internal___ignoreType'
  | 'localFile___childrenImageSharp___internal___mediaType'
  | 'localFile___childrenImageSharp___internal___owner'
  | 'localFile___childrenImageSharp___internal___type'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___gatsbyImageData'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type'
  | 'strapi_id';

export type Strapi__MediaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__MediaEdge>;
  nodes: Array<Strapi__Media>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__MediaGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi__MediaGroupConnectionDistinctArgs = {
  field: Strapi__MediaFieldsEnum;
};


export type Strapi__MediaGroupConnectionMaxArgs = {
  field: Strapi__MediaFieldsEnum;
};


export type Strapi__MediaGroupConnectionMinArgs = {
  field: Strapi__MediaFieldsEnum;
};


export type Strapi__MediaGroupConnectionSumArgs = {
  field: Strapi__MediaFieldsEnum;
};


export type Strapi__MediaGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__MediaFieldsEnum;
};

export type Strapi__MediaFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  formats?: InputMaybe<Strapi__MediaFormatsFilterInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__MediaSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi__MediaFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi__Component_Shared_Text_ItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_Text_ItemEdge>;
  nodes: Array<Strapi__Component_Shared_Text_Item>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_Text_ItemGroupConnection>;
};


export type Strapi__Component_Shared_Text_ItemConnectionDistinctArgs = {
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};


export type Strapi__Component_Shared_Text_ItemConnectionMaxArgs = {
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};


export type Strapi__Component_Shared_Text_ItemConnectionMinArgs = {
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};


export type Strapi__Component_Shared_Text_ItemConnectionSumArgs = {
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};


export type Strapi__Component_Shared_Text_ItemConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};

export type Strapi__Component_Shared_Text_ItemEdge = {
  next?: Maybe<Strapi__Component_Shared_Text_Item>;
  node: Strapi__Component_Shared_Text_Item;
  previous?: Maybe<Strapi__Component_Shared_Text_Item>;
};

export type Strapi__Component_Shared_Text_ItemFieldsEnum =
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
  | 'text'
  | 'strapi_id';

export type Strapi__Component_Shared_Text_ItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_Text_ItemEdge>;
  nodes: Array<Strapi__Component_Shared_Text_Item>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_Text_ItemGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi__Component_Shared_Text_ItemGroupConnectionDistinctArgs = {
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};


export type Strapi__Component_Shared_Text_ItemGroupConnectionMaxArgs = {
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};


export type Strapi__Component_Shared_Text_ItemGroupConnectionMinArgs = {
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};


export type Strapi__Component_Shared_Text_ItemGroupConnectionSumArgs = {
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};


export type Strapi__Component_Shared_Text_ItemGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_Text_ItemFieldsEnum;
};

export type Strapi__Component_Shared_Text_ItemFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__Component_Shared_Text_ItemSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi__Component_Shared_Text_ItemFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi__Component_Shared_SeoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_SeoEdge>;
  nodes: Array<Strapi__Component_Shared_Seo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_SeoGroupConnection>;
};


export type Strapi__Component_Shared_SeoConnectionDistinctArgs = {
  field: Strapi__Component_Shared_SeoFieldsEnum;
};


export type Strapi__Component_Shared_SeoConnectionMaxArgs = {
  field: Strapi__Component_Shared_SeoFieldsEnum;
};


export type Strapi__Component_Shared_SeoConnectionMinArgs = {
  field: Strapi__Component_Shared_SeoFieldsEnum;
};


export type Strapi__Component_Shared_SeoConnectionSumArgs = {
  field: Strapi__Component_Shared_SeoFieldsEnum;
};


export type Strapi__Component_Shared_SeoConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_SeoFieldsEnum;
};

export type Strapi__Component_Shared_SeoEdge = {
  next?: Maybe<Strapi__Component_Shared_Seo>;
  node: Strapi__Component_Shared_Seo;
  previous?: Maybe<Strapi__Component_Shared_Seo>;
};

export type Strapi__Component_Shared_SeoFieldsEnum =
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
  | 'metaTitle'
  | 'metaDescription'
  | 'strapi_id';

export type Strapi__Component_Shared_SeoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_SeoEdge>;
  nodes: Array<Strapi__Component_Shared_Seo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_SeoGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi__Component_Shared_SeoGroupConnectionDistinctArgs = {
  field: Strapi__Component_Shared_SeoFieldsEnum;
};


export type Strapi__Component_Shared_SeoGroupConnectionMaxArgs = {
  field: Strapi__Component_Shared_SeoFieldsEnum;
};


export type Strapi__Component_Shared_SeoGroupConnectionMinArgs = {
  field: Strapi__Component_Shared_SeoFieldsEnum;
};


export type Strapi__Component_Shared_SeoGroupConnectionSumArgs = {
  field: Strapi__Component_Shared_SeoFieldsEnum;
};


export type Strapi__Component_Shared_SeoGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_SeoFieldsEnum;
};

export type Strapi__Component_Shared_SeoFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  metaTitle?: InputMaybe<StringQueryOperatorInput>;
  metaDescription?: InputMaybe<StringQueryOperatorInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__Component_Shared_SeoSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi__Component_Shared_SeoFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi__Component_Shared_Text_ItemFilterListInput = {
  elemMatch?: InputMaybe<Strapi__Component_Shared_Text_ItemFilterInput>;
};

export type Strapi__Component_Shared_ProfileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_ProfileEdge>;
  nodes: Array<Strapi__Component_Shared_Profile>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_ProfileGroupConnection>;
};


export type Strapi__Component_Shared_ProfileConnectionDistinctArgs = {
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};


export type Strapi__Component_Shared_ProfileConnectionMaxArgs = {
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};


export type Strapi__Component_Shared_ProfileConnectionMinArgs = {
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};


export type Strapi__Component_Shared_ProfileConnectionSumArgs = {
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};


export type Strapi__Component_Shared_ProfileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};

export type Strapi__Component_Shared_ProfileEdge = {
  next?: Maybe<Strapi__Component_Shared_Profile>;
  node: Strapi__Component_Shared_Profile;
  previous?: Maybe<Strapi__Component_Shared_Profile>;
};

export type Strapi__Component_Shared_ProfileFieldsEnum =
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
  | 'picture___id'
  | 'picture___parent___id'
  | 'picture___parent___parent___id'
  | 'picture___parent___parent___children'
  | 'picture___parent___children'
  | 'picture___parent___children___id'
  | 'picture___parent___children___children'
  | 'picture___parent___internal___content'
  | 'picture___parent___internal___contentDigest'
  | 'picture___parent___internal___description'
  | 'picture___parent___internal___fieldOwners'
  | 'picture___parent___internal___ignoreType'
  | 'picture___parent___internal___mediaType'
  | 'picture___parent___internal___owner'
  | 'picture___parent___internal___type'
  | 'picture___children'
  | 'picture___children___id'
  | 'picture___children___parent___id'
  | 'picture___children___parent___children'
  | 'picture___children___children'
  | 'picture___children___children___id'
  | 'picture___children___children___children'
  | 'picture___children___internal___content'
  | 'picture___children___internal___contentDigest'
  | 'picture___children___internal___description'
  | 'picture___children___internal___fieldOwners'
  | 'picture___children___internal___ignoreType'
  | 'picture___children___internal___mediaType'
  | 'picture___children___internal___owner'
  | 'picture___children___internal___type'
  | 'picture___internal___content'
  | 'picture___internal___contentDigest'
  | 'picture___internal___description'
  | 'picture___internal___fieldOwners'
  | 'picture___internal___ignoreType'
  | 'picture___internal___mediaType'
  | 'picture___internal___owner'
  | 'picture___internal___type'
  | 'picture___name'
  | 'picture___alternativeText'
  | 'picture___caption'
  | 'picture___width'
  | 'picture___height'
  | 'picture___formats___small___ext'
  | 'picture___formats___small___url'
  | 'picture___formats___small___hash'
  | 'picture___formats___small___mime'
  | 'picture___formats___small___name'
  | 'picture___formats___small___size'
  | 'picture___formats___small___width'
  | 'picture___formats___small___height'
  | 'picture___formats___medium___ext'
  | 'picture___formats___medium___url'
  | 'picture___formats___medium___hash'
  | 'picture___formats___medium___mime'
  | 'picture___formats___medium___name'
  | 'picture___formats___medium___size'
  | 'picture___formats___medium___width'
  | 'picture___formats___medium___height'
  | 'picture___formats___thumbnail___ext'
  | 'picture___formats___thumbnail___url'
  | 'picture___formats___thumbnail___hash'
  | 'picture___formats___thumbnail___mime'
  | 'picture___formats___thumbnail___name'
  | 'picture___formats___thumbnail___size'
  | 'picture___formats___thumbnail___width'
  | 'picture___formats___thumbnail___height'
  | 'picture___formats___large___ext'
  | 'picture___formats___large___url'
  | 'picture___formats___large___hash'
  | 'picture___formats___large___mime'
  | 'picture___formats___large___name'
  | 'picture___formats___large___size'
  | 'picture___formats___large___width'
  | 'picture___formats___large___height'
  | 'picture___hash'
  | 'picture___ext'
  | 'picture___mime'
  | 'picture___size'
  | 'picture___url'
  | 'picture___createdAt'
  | 'picture___updatedAt'
  | 'picture___localFile___sourceInstanceName'
  | 'picture___localFile___absolutePath'
  | 'picture___localFile___relativePath'
  | 'picture___localFile___extension'
  | 'picture___localFile___size'
  | 'picture___localFile___prettySize'
  | 'picture___localFile___modifiedTime'
  | 'picture___localFile___accessTime'
  | 'picture___localFile___changeTime'
  | 'picture___localFile___birthTime'
  | 'picture___localFile___root'
  | 'picture___localFile___dir'
  | 'picture___localFile___base'
  | 'picture___localFile___ext'
  | 'picture___localFile___name'
  | 'picture___localFile___relativeDirectory'
  | 'picture___localFile___dev'
  | 'picture___localFile___mode'
  | 'picture___localFile___nlink'
  | 'picture___localFile___uid'
  | 'picture___localFile___gid'
  | 'picture___localFile___rdev'
  | 'picture___localFile___ino'
  | 'picture___localFile___atimeMs'
  | 'picture___localFile___mtimeMs'
  | 'picture___localFile___ctimeMs'
  | 'picture___localFile___atime'
  | 'picture___localFile___mtime'
  | 'picture___localFile___ctime'
  | 'picture___localFile___birthtime'
  | 'picture___localFile___birthtimeMs'
  | 'picture___localFile___blksize'
  | 'picture___localFile___blocks'
  | 'picture___localFile___url'
  | 'picture___localFile___publicURL'
  | 'picture___localFile___childrenImageSharp'
  | 'picture___localFile___childrenImageSharp___gatsbyImageData'
  | 'picture___localFile___childrenImageSharp___id'
  | 'picture___localFile___childrenImageSharp___children'
  | 'picture___localFile___childImageSharp___gatsbyImageData'
  | 'picture___localFile___childImageSharp___id'
  | 'picture___localFile___childImageSharp___children'
  | 'picture___localFile___id'
  | 'picture___localFile___parent___id'
  | 'picture___localFile___parent___children'
  | 'picture___localFile___children'
  | 'picture___localFile___children___id'
  | 'picture___localFile___children___children'
  | 'picture___localFile___internal___content'
  | 'picture___localFile___internal___contentDigest'
  | 'picture___localFile___internal___description'
  | 'picture___localFile___internal___fieldOwners'
  | 'picture___localFile___internal___ignoreType'
  | 'picture___localFile___internal___mediaType'
  | 'picture___localFile___internal___owner'
  | 'picture___localFile___internal___type'
  | 'picture___strapi_id'
  | 'qualities'
  | 'qualities___id'
  | 'qualities___parent___id'
  | 'qualities___parent___parent___id'
  | 'qualities___parent___parent___children'
  | 'qualities___parent___children'
  | 'qualities___parent___children___id'
  | 'qualities___parent___children___children'
  | 'qualities___parent___internal___content'
  | 'qualities___parent___internal___contentDigest'
  | 'qualities___parent___internal___description'
  | 'qualities___parent___internal___fieldOwners'
  | 'qualities___parent___internal___ignoreType'
  | 'qualities___parent___internal___mediaType'
  | 'qualities___parent___internal___owner'
  | 'qualities___parent___internal___type'
  | 'qualities___children'
  | 'qualities___children___id'
  | 'qualities___children___parent___id'
  | 'qualities___children___parent___children'
  | 'qualities___children___children'
  | 'qualities___children___children___id'
  | 'qualities___children___children___children'
  | 'qualities___children___internal___content'
  | 'qualities___children___internal___contentDigest'
  | 'qualities___children___internal___description'
  | 'qualities___children___internal___fieldOwners'
  | 'qualities___children___internal___ignoreType'
  | 'qualities___children___internal___mediaType'
  | 'qualities___children___internal___owner'
  | 'qualities___children___internal___type'
  | 'qualities___internal___content'
  | 'qualities___internal___contentDigest'
  | 'qualities___internal___description'
  | 'qualities___internal___fieldOwners'
  | 'qualities___internal___ignoreType'
  | 'qualities___internal___mediaType'
  | 'qualities___internal___owner'
  | 'qualities___internal___type'
  | 'qualities___text'
  | 'qualities___strapi_id'
  | 'strapi_id';

export type Strapi__Component_Shared_ProfileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_ProfileEdge>;
  nodes: Array<Strapi__Component_Shared_Profile>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_ProfileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi__Component_Shared_ProfileGroupConnectionDistinctArgs = {
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};


export type Strapi__Component_Shared_ProfileGroupConnectionMaxArgs = {
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};


export type Strapi__Component_Shared_ProfileGroupConnectionMinArgs = {
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};


export type Strapi__Component_Shared_ProfileGroupConnectionSumArgs = {
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};


export type Strapi__Component_Shared_ProfileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_ProfileFieldsEnum;
};

export type Strapi__Component_Shared_ProfileFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  picture?: InputMaybe<Strapi__MediaFilterInput>;
  qualities?: InputMaybe<Strapi__Component_Shared_Text_ItemFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__Component_Shared_ProfileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi__Component_Shared_ProfileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi__Component_Shared_LinksConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_LinksEdge>;
  nodes: Array<Strapi__Component_Shared_Links>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_LinksGroupConnection>;
};


export type Strapi__Component_Shared_LinksConnectionDistinctArgs = {
  field: Strapi__Component_Shared_LinksFieldsEnum;
};


export type Strapi__Component_Shared_LinksConnectionMaxArgs = {
  field: Strapi__Component_Shared_LinksFieldsEnum;
};


export type Strapi__Component_Shared_LinksConnectionMinArgs = {
  field: Strapi__Component_Shared_LinksFieldsEnum;
};


export type Strapi__Component_Shared_LinksConnectionSumArgs = {
  field: Strapi__Component_Shared_LinksFieldsEnum;
};


export type Strapi__Component_Shared_LinksConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_LinksFieldsEnum;
};

export type Strapi__Component_Shared_LinksEdge = {
  next?: Maybe<Strapi__Component_Shared_Links>;
  node: Strapi__Component_Shared_Links;
  previous?: Maybe<Strapi__Component_Shared_Links>;
};

export type Strapi__Component_Shared_LinksFieldsEnum =
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
  | 'link'
  | 'label'
  | 'strapi_id';

export type Strapi__Component_Shared_LinksGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_LinksEdge>;
  nodes: Array<Strapi__Component_Shared_Links>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_LinksGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi__Component_Shared_LinksGroupConnectionDistinctArgs = {
  field: Strapi__Component_Shared_LinksFieldsEnum;
};


export type Strapi__Component_Shared_LinksGroupConnectionMaxArgs = {
  field: Strapi__Component_Shared_LinksFieldsEnum;
};


export type Strapi__Component_Shared_LinksGroupConnectionMinArgs = {
  field: Strapi__Component_Shared_LinksFieldsEnum;
};


export type Strapi__Component_Shared_LinksGroupConnectionSumArgs = {
  field: Strapi__Component_Shared_LinksFieldsEnum;
};


export type Strapi__Component_Shared_LinksGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_LinksFieldsEnum;
};

export type Strapi__Component_Shared_LinksFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__Component_Shared_LinksSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi__Component_Shared_LinksFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi__Component_Shared_ContactConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_ContactEdge>;
  nodes: Array<Strapi__Component_Shared_Contact>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_ContactGroupConnection>;
};


export type Strapi__Component_Shared_ContactConnectionDistinctArgs = {
  field: Strapi__Component_Shared_ContactFieldsEnum;
};


export type Strapi__Component_Shared_ContactConnectionMaxArgs = {
  field: Strapi__Component_Shared_ContactFieldsEnum;
};


export type Strapi__Component_Shared_ContactConnectionMinArgs = {
  field: Strapi__Component_Shared_ContactFieldsEnum;
};


export type Strapi__Component_Shared_ContactConnectionSumArgs = {
  field: Strapi__Component_Shared_ContactFieldsEnum;
};


export type Strapi__Component_Shared_ContactConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_ContactFieldsEnum;
};

export type Strapi__Component_Shared_ContactEdge = {
  next?: Maybe<Strapi__Component_Shared_Contact>;
  node: Strapi__Component_Shared_Contact;
  previous?: Maybe<Strapi__Component_Shared_Contact>;
};

export type Strapi__Component_Shared_ContactFieldsEnum =
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
  | 'text'
  | 'button___id'
  | 'button___parent___id'
  | 'button___parent___parent___id'
  | 'button___parent___parent___children'
  | 'button___parent___children'
  | 'button___parent___children___id'
  | 'button___parent___children___children'
  | 'button___parent___internal___content'
  | 'button___parent___internal___contentDigest'
  | 'button___parent___internal___description'
  | 'button___parent___internal___fieldOwners'
  | 'button___parent___internal___ignoreType'
  | 'button___parent___internal___mediaType'
  | 'button___parent___internal___owner'
  | 'button___parent___internal___type'
  | 'button___children'
  | 'button___children___id'
  | 'button___children___parent___id'
  | 'button___children___parent___children'
  | 'button___children___children'
  | 'button___children___children___id'
  | 'button___children___children___children'
  | 'button___children___internal___content'
  | 'button___children___internal___contentDigest'
  | 'button___children___internal___description'
  | 'button___children___internal___fieldOwners'
  | 'button___children___internal___ignoreType'
  | 'button___children___internal___mediaType'
  | 'button___children___internal___owner'
  | 'button___children___internal___type'
  | 'button___internal___content'
  | 'button___internal___contentDigest'
  | 'button___internal___description'
  | 'button___internal___fieldOwners'
  | 'button___internal___ignoreType'
  | 'button___internal___mediaType'
  | 'button___internal___owner'
  | 'button___internal___type'
  | 'button___link'
  | 'button___label'
  | 'button___strapi_id'
  | 'strapi_id';

export type Strapi__Component_Shared_ContactGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi__Component_Shared_ContactEdge>;
  nodes: Array<Strapi__Component_Shared_Contact>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi__Component_Shared_ContactGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi__Component_Shared_ContactGroupConnectionDistinctArgs = {
  field: Strapi__Component_Shared_ContactFieldsEnum;
};


export type Strapi__Component_Shared_ContactGroupConnectionMaxArgs = {
  field: Strapi__Component_Shared_ContactFieldsEnum;
};


export type Strapi__Component_Shared_ContactGroupConnectionMinArgs = {
  field: Strapi__Component_Shared_ContactFieldsEnum;
};


export type Strapi__Component_Shared_ContactGroupConnectionSumArgs = {
  field: Strapi__Component_Shared_ContactFieldsEnum;
};


export type Strapi__Component_Shared_ContactGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi__Component_Shared_ContactFieldsEnum;
};

export type Strapi__Component_Shared_ContactFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  button?: InputMaybe<Strapi__Component_Shared_LinksFilterInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__Component_Shared_ContactSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi__Component_Shared_ContactFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi_ProjectFilterListInput = {
  elemMatch?: InputMaybe<Strapi_ProjectFilterInput>;
};

export type Strapi_ProjectFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<Strapi_ProjectDescriptionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  coverImage?: InputMaybe<Strapi__MediaFilterInput>;
  images?: InputMaybe<Strapi__MediaFilterListInput>;
  tags?: InputMaybe<Strapi_TagFilterListInput>;
  areas?: InputMaybe<Strapi_AreaFilterListInput>;
  organization?: InputMaybe<Strapi_OrganizationFilterInput>;
  links?: InputMaybe<Strapi__Component_Shared_LinksFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
  childrenStrapiProjectDescriptionTextnode?: InputMaybe<Strapi_Project_Description_TextnodeFilterListInput>;
  childStrapiProjectDescriptionTextnode?: InputMaybe<Strapi_Project_Description_TextnodeFilterInput>;
};

export type Strapi_ProjectDescriptionFilterInput = {
  medias?: InputMaybe<Strapi_ProjectDescriptionMediasFilterListInput>;
  data?: InputMaybe<Strapi_Project_Description_TextnodeFilterInput>;
};

export type Strapi_ProjectDescriptionMediasFilterListInput = {
  elemMatch?: InputMaybe<Strapi_ProjectDescriptionMediasFilterInput>;
};

export type Strapi_ProjectDescriptionMediasFilterInput = {
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  file?: InputMaybe<Strapi_ProjectDescriptionMediasFileFilterInput>;
};

export type Strapi_ProjectDescriptionMediasFileFilterInput = {
  id?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  alternativeText?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  formats?: InputMaybe<Strapi_ProjectDescriptionMediasFileFormatsFilterInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  provider?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type Strapi_ProjectDescriptionMediasFileFormatsFilterInput = {
  large?: InputMaybe<Strapi_ProjectDescriptionMediasFileFormatsLargeFilterInput>;
  small?: InputMaybe<Strapi_ProjectDescriptionMediasFileFormatsSmallFilterInput>;
  medium?: InputMaybe<Strapi_ProjectDescriptionMediasFileFormatsMediumFilterInput>;
  thumbnail?: InputMaybe<Strapi_ProjectDescriptionMediasFileFormatsThumbnailFilterInput>;
};

export type Strapi_ProjectDescriptionMediasFileFormatsLargeFilterInput = {
  ext?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi_ProjectDescriptionMediasFileFormatsSmallFilterInput = {
  ext?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi_ProjectDescriptionMediasFileFormatsMediumFilterInput = {
  ext?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi_ProjectDescriptionMediasFileFormatsThumbnailFilterInput = {
  ext?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  mime?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi_Project_Description_TextnodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
};

export type Strapi__MediaFilterListInput = {
  elemMatch?: InputMaybe<Strapi__MediaFilterInput>;
};

export type Strapi_TagFilterListInput = {
  elemMatch?: InputMaybe<Strapi_TagFilterInput>;
};

export type Strapi_TagFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  projects?: InputMaybe<Strapi_ProjectFilterListInput>;
  areas?: InputMaybe<Strapi_AreaFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi_AreaFilterListInput = {
  elemMatch?: InputMaybe<Strapi_AreaFilterInput>;
};

export type Strapi_AreaFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<Strapi_TagFilterListInput>;
  projects?: InputMaybe<Strapi_ProjectFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi_OrganizationFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  projects?: InputMaybe<Strapi_ProjectFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi__Component_Shared_LinksFilterListInput = {
  elemMatch?: InputMaybe<Strapi__Component_Shared_LinksFilterInput>;
};

export type Strapi_Project_Description_TextnodeFilterListInput = {
  elemMatch?: InputMaybe<Strapi_Project_Description_TextnodeFilterInput>;
};

export type Strapi_TagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_TagEdge>;
  nodes: Array<Strapi_Tag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_TagGroupConnection>;
};


export type Strapi_TagConnectionDistinctArgs = {
  field: Strapi_TagFieldsEnum;
};


export type Strapi_TagConnectionMaxArgs = {
  field: Strapi_TagFieldsEnum;
};


export type Strapi_TagConnectionMinArgs = {
  field: Strapi_TagFieldsEnum;
};


export type Strapi_TagConnectionSumArgs = {
  field: Strapi_TagFieldsEnum;
};


export type Strapi_TagConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_TagFieldsEnum;
};

export type Strapi_TagEdge = {
  next?: Maybe<Strapi_Tag>;
  node: Strapi_Tag;
  previous?: Maybe<Strapi_Tag>;
};

export type Strapi_TagFieldsEnum =
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
  | 'name'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'projects'
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
  | 'projects___title'
  | 'projects___name'
  | 'projects___description___medias'
  | 'projects___description___medias___alternativeText'
  | 'projects___description___medias___url'
  | 'projects___description___medias___src'
  | 'projects___description___data___id'
  | 'projects___description___data___children'
  | 'projects___description___data___description'
  | 'projects___slug'
  | 'projects___createdAt'
  | 'projects___updatedAt'
  | 'projects___publishedAt'
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
  | 'projects___coverImage___name'
  | 'projects___coverImage___alternativeText'
  | 'projects___coverImage___caption'
  | 'projects___coverImage___width'
  | 'projects___coverImage___height'
  | 'projects___coverImage___hash'
  | 'projects___coverImage___ext'
  | 'projects___coverImage___mime'
  | 'projects___coverImage___size'
  | 'projects___coverImage___url'
  | 'projects___coverImage___createdAt'
  | 'projects___coverImage___updatedAt'
  | 'projects___coverImage___localFile___sourceInstanceName'
  | 'projects___coverImage___localFile___absolutePath'
  | 'projects___coverImage___localFile___relativePath'
  | 'projects___coverImage___localFile___extension'
  | 'projects___coverImage___localFile___size'
  | 'projects___coverImage___localFile___prettySize'
  | 'projects___coverImage___localFile___modifiedTime'
  | 'projects___coverImage___localFile___accessTime'
  | 'projects___coverImage___localFile___changeTime'
  | 'projects___coverImage___localFile___birthTime'
  | 'projects___coverImage___localFile___root'
  | 'projects___coverImage___localFile___dir'
  | 'projects___coverImage___localFile___base'
  | 'projects___coverImage___localFile___ext'
  | 'projects___coverImage___localFile___name'
  | 'projects___coverImage___localFile___relativeDirectory'
  | 'projects___coverImage___localFile___dev'
  | 'projects___coverImage___localFile___mode'
  | 'projects___coverImage___localFile___nlink'
  | 'projects___coverImage___localFile___uid'
  | 'projects___coverImage___localFile___gid'
  | 'projects___coverImage___localFile___rdev'
  | 'projects___coverImage___localFile___ino'
  | 'projects___coverImage___localFile___atimeMs'
  | 'projects___coverImage___localFile___mtimeMs'
  | 'projects___coverImage___localFile___ctimeMs'
  | 'projects___coverImage___localFile___atime'
  | 'projects___coverImage___localFile___mtime'
  | 'projects___coverImage___localFile___ctime'
  | 'projects___coverImage___localFile___birthtime'
  | 'projects___coverImage___localFile___birthtimeMs'
  | 'projects___coverImage___localFile___blksize'
  | 'projects___coverImage___localFile___blocks'
  | 'projects___coverImage___localFile___url'
  | 'projects___coverImage___localFile___publicURL'
  | 'projects___coverImage___localFile___childrenImageSharp'
  | 'projects___coverImage___localFile___id'
  | 'projects___coverImage___localFile___children'
  | 'projects___coverImage___strapi_id'
  | 'projects___images'
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
  | 'projects___images___name'
  | 'projects___images___alternativeText'
  | 'projects___images___caption'
  | 'projects___images___width'
  | 'projects___images___height'
  | 'projects___images___hash'
  | 'projects___images___ext'
  | 'projects___images___mime'
  | 'projects___images___size'
  | 'projects___images___url'
  | 'projects___images___createdAt'
  | 'projects___images___updatedAt'
  | 'projects___images___localFile___sourceInstanceName'
  | 'projects___images___localFile___absolutePath'
  | 'projects___images___localFile___relativePath'
  | 'projects___images___localFile___extension'
  | 'projects___images___localFile___size'
  | 'projects___images___localFile___prettySize'
  | 'projects___images___localFile___modifiedTime'
  | 'projects___images___localFile___accessTime'
  | 'projects___images___localFile___changeTime'
  | 'projects___images___localFile___birthTime'
  | 'projects___images___localFile___root'
  | 'projects___images___localFile___dir'
  | 'projects___images___localFile___base'
  | 'projects___images___localFile___ext'
  | 'projects___images___localFile___name'
  | 'projects___images___localFile___relativeDirectory'
  | 'projects___images___localFile___dev'
  | 'projects___images___localFile___mode'
  | 'projects___images___localFile___nlink'
  | 'projects___images___localFile___uid'
  | 'projects___images___localFile___gid'
  | 'projects___images___localFile___rdev'
  | 'projects___images___localFile___ino'
  | 'projects___images___localFile___atimeMs'
  | 'projects___images___localFile___mtimeMs'
  | 'projects___images___localFile___ctimeMs'
  | 'projects___images___localFile___atime'
  | 'projects___images___localFile___mtime'
  | 'projects___images___localFile___ctime'
  | 'projects___images___localFile___birthtime'
  | 'projects___images___localFile___birthtimeMs'
  | 'projects___images___localFile___blksize'
  | 'projects___images___localFile___blocks'
  | 'projects___images___localFile___url'
  | 'projects___images___localFile___publicURL'
  | 'projects___images___localFile___childrenImageSharp'
  | 'projects___images___localFile___id'
  | 'projects___images___localFile___children'
  | 'projects___images___strapi_id'
  | 'projects___tags'
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
  | 'projects___tags___name'
  | 'projects___tags___createdAt'
  | 'projects___tags___updatedAt'
  | 'projects___tags___publishedAt'
  | 'projects___tags___projects'
  | 'projects___tags___projects___id'
  | 'projects___tags___projects___children'
  | 'projects___tags___projects___title'
  | 'projects___tags___projects___name'
  | 'projects___tags___projects___slug'
  | 'projects___tags___projects___createdAt'
  | 'projects___tags___projects___updatedAt'
  | 'projects___tags___projects___publishedAt'
  | 'projects___tags___projects___images'
  | 'projects___tags___projects___tags'
  | 'projects___tags___projects___areas'
  | 'projects___tags___projects___links'
  | 'projects___tags___projects___strapi_id'
  | 'projects___tags___projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___tags___areas'
  | 'projects___tags___areas___id'
  | 'projects___tags___areas___children'
  | 'projects___tags___areas___name'
  | 'projects___tags___areas___description'
  | 'projects___tags___areas___color'
  | 'projects___tags___areas___slug'
  | 'projects___tags___areas___createdAt'
  | 'projects___tags___areas___updatedAt'
  | 'projects___tags___areas___publishedAt'
  | 'projects___tags___areas___tags'
  | 'projects___tags___areas___projects'
  | 'projects___tags___areas___strapi_id'
  | 'projects___tags___strapi_id'
  | 'projects___areas'
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
  | 'projects___areas___name'
  | 'projects___areas___description'
  | 'projects___areas___color'
  | 'projects___areas___slug'
  | 'projects___areas___createdAt'
  | 'projects___areas___updatedAt'
  | 'projects___areas___publishedAt'
  | 'projects___areas___tags'
  | 'projects___areas___tags___id'
  | 'projects___areas___tags___children'
  | 'projects___areas___tags___name'
  | 'projects___areas___tags___createdAt'
  | 'projects___areas___tags___updatedAt'
  | 'projects___areas___tags___publishedAt'
  | 'projects___areas___tags___projects'
  | 'projects___areas___tags___areas'
  | 'projects___areas___tags___strapi_id'
  | 'projects___areas___projects'
  | 'projects___areas___projects___id'
  | 'projects___areas___projects___children'
  | 'projects___areas___projects___title'
  | 'projects___areas___projects___name'
  | 'projects___areas___projects___slug'
  | 'projects___areas___projects___createdAt'
  | 'projects___areas___projects___updatedAt'
  | 'projects___areas___projects___publishedAt'
  | 'projects___areas___projects___images'
  | 'projects___areas___projects___tags'
  | 'projects___areas___projects___areas'
  | 'projects___areas___projects___links'
  | 'projects___areas___projects___strapi_id'
  | 'projects___areas___projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___areas___strapi_id'
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
  | 'projects___organization___name'
  | 'projects___organization___link'
  | 'projects___organization___createdAt'
  | 'projects___organization___updatedAt'
  | 'projects___organization___publishedAt'
  | 'projects___organization___projects'
  | 'projects___organization___projects___id'
  | 'projects___organization___projects___children'
  | 'projects___organization___projects___title'
  | 'projects___organization___projects___name'
  | 'projects___organization___projects___slug'
  | 'projects___organization___projects___createdAt'
  | 'projects___organization___projects___updatedAt'
  | 'projects___organization___projects___publishedAt'
  | 'projects___organization___projects___images'
  | 'projects___organization___projects___tags'
  | 'projects___organization___projects___areas'
  | 'projects___organization___projects___links'
  | 'projects___organization___projects___strapi_id'
  | 'projects___organization___projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___organization___strapi_id'
  | 'projects___links'
  | 'projects___links___id'
  | 'projects___links___parent___id'
  | 'projects___links___parent___children'
  | 'projects___links___children'
  | 'projects___links___children___id'
  | 'projects___links___children___children'
  | 'projects___links___internal___content'
  | 'projects___links___internal___contentDigest'
  | 'projects___links___internal___description'
  | 'projects___links___internal___fieldOwners'
  | 'projects___links___internal___ignoreType'
  | 'projects___links___internal___mediaType'
  | 'projects___links___internal___owner'
  | 'projects___links___internal___type'
  | 'projects___links___link'
  | 'projects___links___label'
  | 'projects___links___strapi_id'
  | 'projects___strapi_id'
  | 'projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___childrenStrapiProjectDescriptionTextnode___id'
  | 'projects___childrenStrapiProjectDescriptionTextnode___parent___id'
  | 'projects___childrenStrapiProjectDescriptionTextnode___parent___children'
  | 'projects___childrenStrapiProjectDescriptionTextnode___children'
  | 'projects___childrenStrapiProjectDescriptionTextnode___children___id'
  | 'projects___childrenStrapiProjectDescriptionTextnode___children___children'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___content'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___contentDigest'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___description'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___fieldOwners'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___ignoreType'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___mediaType'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___owner'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___type'
  | 'projects___childrenStrapiProjectDescriptionTextnode___description'
  | 'projects___childStrapiProjectDescriptionTextnode___id'
  | 'projects___childStrapiProjectDescriptionTextnode___parent___id'
  | 'projects___childStrapiProjectDescriptionTextnode___parent___children'
  | 'projects___childStrapiProjectDescriptionTextnode___children'
  | 'projects___childStrapiProjectDescriptionTextnode___children___id'
  | 'projects___childStrapiProjectDescriptionTextnode___children___children'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___content'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___contentDigest'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___description'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___fieldOwners'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___ignoreType'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___mediaType'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___owner'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___type'
  | 'projects___childStrapiProjectDescriptionTextnode___description'
  | 'areas'
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
  | 'areas___name'
  | 'areas___description'
  | 'areas___color'
  | 'areas___slug'
  | 'areas___createdAt'
  | 'areas___updatedAt'
  | 'areas___publishedAt'
  | 'areas___tags'
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
  | 'areas___tags___name'
  | 'areas___tags___createdAt'
  | 'areas___tags___updatedAt'
  | 'areas___tags___publishedAt'
  | 'areas___tags___projects'
  | 'areas___tags___projects___id'
  | 'areas___tags___projects___children'
  | 'areas___tags___projects___title'
  | 'areas___tags___projects___name'
  | 'areas___tags___projects___slug'
  | 'areas___tags___projects___createdAt'
  | 'areas___tags___projects___updatedAt'
  | 'areas___tags___projects___publishedAt'
  | 'areas___tags___projects___images'
  | 'areas___tags___projects___tags'
  | 'areas___tags___projects___areas'
  | 'areas___tags___projects___links'
  | 'areas___tags___projects___strapi_id'
  | 'areas___tags___projects___childrenStrapiProjectDescriptionTextnode'
  | 'areas___tags___areas'
  | 'areas___tags___areas___id'
  | 'areas___tags___areas___children'
  | 'areas___tags___areas___name'
  | 'areas___tags___areas___description'
  | 'areas___tags___areas___color'
  | 'areas___tags___areas___slug'
  | 'areas___tags___areas___createdAt'
  | 'areas___tags___areas___updatedAt'
  | 'areas___tags___areas___publishedAt'
  | 'areas___tags___areas___tags'
  | 'areas___tags___areas___projects'
  | 'areas___tags___areas___strapi_id'
  | 'areas___tags___strapi_id'
  | 'areas___projects'
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
  | 'areas___projects___title'
  | 'areas___projects___name'
  | 'areas___projects___description___medias'
  | 'areas___projects___slug'
  | 'areas___projects___createdAt'
  | 'areas___projects___updatedAt'
  | 'areas___projects___publishedAt'
  | 'areas___projects___coverImage___id'
  | 'areas___projects___coverImage___children'
  | 'areas___projects___coverImage___name'
  | 'areas___projects___coverImage___alternativeText'
  | 'areas___projects___coverImage___caption'
  | 'areas___projects___coverImage___width'
  | 'areas___projects___coverImage___height'
  | 'areas___projects___coverImage___hash'
  | 'areas___projects___coverImage___ext'
  | 'areas___projects___coverImage___mime'
  | 'areas___projects___coverImage___size'
  | 'areas___projects___coverImage___url'
  | 'areas___projects___coverImage___createdAt'
  | 'areas___projects___coverImage___updatedAt'
  | 'areas___projects___coverImage___strapi_id'
  | 'areas___projects___images'
  | 'areas___projects___images___id'
  | 'areas___projects___images___children'
  | 'areas___projects___images___name'
  | 'areas___projects___images___alternativeText'
  | 'areas___projects___images___caption'
  | 'areas___projects___images___width'
  | 'areas___projects___images___height'
  | 'areas___projects___images___hash'
  | 'areas___projects___images___ext'
  | 'areas___projects___images___mime'
  | 'areas___projects___images___size'
  | 'areas___projects___images___url'
  | 'areas___projects___images___createdAt'
  | 'areas___projects___images___updatedAt'
  | 'areas___projects___images___strapi_id'
  | 'areas___projects___tags'
  | 'areas___projects___tags___id'
  | 'areas___projects___tags___children'
  | 'areas___projects___tags___name'
  | 'areas___projects___tags___createdAt'
  | 'areas___projects___tags___updatedAt'
  | 'areas___projects___tags___publishedAt'
  | 'areas___projects___tags___projects'
  | 'areas___projects___tags___areas'
  | 'areas___projects___tags___strapi_id'
  | 'areas___projects___areas'
  | 'areas___projects___areas___id'
  | 'areas___projects___areas___children'
  | 'areas___projects___areas___name'
  | 'areas___projects___areas___description'
  | 'areas___projects___areas___color'
  | 'areas___projects___areas___slug'
  | 'areas___projects___areas___createdAt'
  | 'areas___projects___areas___updatedAt'
  | 'areas___projects___areas___publishedAt'
  | 'areas___projects___areas___tags'
  | 'areas___projects___areas___projects'
  | 'areas___projects___areas___strapi_id'
  | 'areas___projects___organization___id'
  | 'areas___projects___organization___children'
  | 'areas___projects___organization___name'
  | 'areas___projects___organization___link'
  | 'areas___projects___organization___createdAt'
  | 'areas___projects___organization___updatedAt'
  | 'areas___projects___organization___publishedAt'
  | 'areas___projects___organization___projects'
  | 'areas___projects___organization___strapi_id'
  | 'areas___projects___links'
  | 'areas___projects___links___id'
  | 'areas___projects___links___children'
  | 'areas___projects___links___link'
  | 'areas___projects___links___label'
  | 'areas___projects___links___strapi_id'
  | 'areas___projects___strapi_id'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode___id'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode___children'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode___description'
  | 'areas___projects___childStrapiProjectDescriptionTextnode___id'
  | 'areas___projects___childStrapiProjectDescriptionTextnode___children'
  | 'areas___projects___childStrapiProjectDescriptionTextnode___description'
  | 'areas___strapi_id'
  | 'strapi_id';

export type Strapi_TagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_TagEdge>;
  nodes: Array<Strapi_Tag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_TagGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi_TagGroupConnectionDistinctArgs = {
  field: Strapi_TagFieldsEnum;
};


export type Strapi_TagGroupConnectionMaxArgs = {
  field: Strapi_TagFieldsEnum;
};


export type Strapi_TagGroupConnectionMinArgs = {
  field: Strapi_TagFieldsEnum;
};


export type Strapi_TagGroupConnectionSumArgs = {
  field: Strapi_TagFieldsEnum;
};


export type Strapi_TagGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_TagFieldsEnum;
};

export type Strapi_TagSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_TagFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi_Project_Description_TextnodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_Project_Description_TextnodeEdge>;
  nodes: Array<Strapi_Project_Description_Textnode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_Project_Description_TextnodeGroupConnection>;
};


export type Strapi_Project_Description_TextnodeConnectionDistinctArgs = {
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};


export type Strapi_Project_Description_TextnodeConnectionMaxArgs = {
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};


export type Strapi_Project_Description_TextnodeConnectionMinArgs = {
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};


export type Strapi_Project_Description_TextnodeConnectionSumArgs = {
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};


export type Strapi_Project_Description_TextnodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};

export type Strapi_Project_Description_TextnodeEdge = {
  next?: Maybe<Strapi_Project_Description_Textnode>;
  node: Strapi_Project_Description_Textnode;
  previous?: Maybe<Strapi_Project_Description_Textnode>;
};

export type Strapi_Project_Description_TextnodeFieldsEnum =
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
  | 'description';

export type Strapi_Project_Description_TextnodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_Project_Description_TextnodeEdge>;
  nodes: Array<Strapi_Project_Description_Textnode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_Project_Description_TextnodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi_Project_Description_TextnodeGroupConnectionDistinctArgs = {
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};


export type Strapi_Project_Description_TextnodeGroupConnectionMaxArgs = {
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};


export type Strapi_Project_Description_TextnodeGroupConnectionMinArgs = {
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};


export type Strapi_Project_Description_TextnodeGroupConnectionSumArgs = {
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};


export type Strapi_Project_Description_TextnodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_Project_Description_TextnodeFieldsEnum;
};

export type Strapi_Project_Description_TextnodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_Project_Description_TextnodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi_ProjectConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_ProjectEdge>;
  nodes: Array<Strapi_Project>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_ProjectGroupConnection>;
};


export type Strapi_ProjectConnectionDistinctArgs = {
  field: Strapi_ProjectFieldsEnum;
};


export type Strapi_ProjectConnectionMaxArgs = {
  field: Strapi_ProjectFieldsEnum;
};


export type Strapi_ProjectConnectionMinArgs = {
  field: Strapi_ProjectFieldsEnum;
};


export type Strapi_ProjectConnectionSumArgs = {
  field: Strapi_ProjectFieldsEnum;
};


export type Strapi_ProjectConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_ProjectFieldsEnum;
};

export type Strapi_ProjectEdge = {
  next?: Maybe<Strapi_Project>;
  node: Strapi_Project;
  previous?: Maybe<Strapi_Project>;
};

export type Strapi_ProjectFieldsEnum =
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
  | 'title'
  | 'name'
  | 'description___medias'
  | 'description___medias___alternativeText'
  | 'description___medias___url'
  | 'description___medias___src'
  | 'description___medias___localFile___sourceInstanceName'
  | 'description___medias___localFile___absolutePath'
  | 'description___medias___localFile___relativePath'
  | 'description___medias___localFile___extension'
  | 'description___medias___localFile___size'
  | 'description___medias___localFile___prettySize'
  | 'description___medias___localFile___modifiedTime'
  | 'description___medias___localFile___accessTime'
  | 'description___medias___localFile___changeTime'
  | 'description___medias___localFile___birthTime'
  | 'description___medias___localFile___root'
  | 'description___medias___localFile___dir'
  | 'description___medias___localFile___base'
  | 'description___medias___localFile___ext'
  | 'description___medias___localFile___name'
  | 'description___medias___localFile___relativeDirectory'
  | 'description___medias___localFile___dev'
  | 'description___medias___localFile___mode'
  | 'description___medias___localFile___nlink'
  | 'description___medias___localFile___uid'
  | 'description___medias___localFile___gid'
  | 'description___medias___localFile___rdev'
  | 'description___medias___localFile___ino'
  | 'description___medias___localFile___atimeMs'
  | 'description___medias___localFile___mtimeMs'
  | 'description___medias___localFile___ctimeMs'
  | 'description___medias___localFile___atime'
  | 'description___medias___localFile___mtime'
  | 'description___medias___localFile___ctime'
  | 'description___medias___localFile___birthtime'
  | 'description___medias___localFile___birthtimeMs'
  | 'description___medias___localFile___blksize'
  | 'description___medias___localFile___blocks'
  | 'description___medias___localFile___url'
  | 'description___medias___localFile___publicURL'
  | 'description___medias___localFile___childrenImageSharp'
  | 'description___medias___localFile___id'
  | 'description___medias___localFile___children'
  | 'description___medias___file___id'
  | 'description___medias___file___name'
  | 'description___medias___file___alternativeText'
  | 'description___medias___file___caption'
  | 'description___medias___file___width'
  | 'description___medias___file___height'
  | 'description___medias___file___hash'
  | 'description___medias___file___ext'
  | 'description___medias___file___mime'
  | 'description___medias___file___size'
  | 'description___medias___file___url'
  | 'description___medias___file___provider'
  | 'description___medias___file___createdAt'
  | 'description___medias___file___updatedAt'
  | 'description___data___id'
  | 'description___data___parent___id'
  | 'description___data___parent___children'
  | 'description___data___children'
  | 'description___data___children___id'
  | 'description___data___children___children'
  | 'description___data___internal___content'
  | 'description___data___internal___contentDigest'
  | 'description___data___internal___description'
  | 'description___data___internal___fieldOwners'
  | 'description___data___internal___ignoreType'
  | 'description___data___internal___mediaType'
  | 'description___data___internal___owner'
  | 'description___data___internal___type'
  | 'description___data___description'
  | 'slug'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
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
  | 'coverImage___name'
  | 'coverImage___alternativeText'
  | 'coverImage___caption'
  | 'coverImage___width'
  | 'coverImage___height'
  | 'coverImage___formats___small___ext'
  | 'coverImage___formats___small___url'
  | 'coverImage___formats___small___hash'
  | 'coverImage___formats___small___mime'
  | 'coverImage___formats___small___name'
  | 'coverImage___formats___small___size'
  | 'coverImage___formats___small___width'
  | 'coverImage___formats___small___height'
  | 'coverImage___formats___medium___ext'
  | 'coverImage___formats___medium___url'
  | 'coverImage___formats___medium___hash'
  | 'coverImage___formats___medium___mime'
  | 'coverImage___formats___medium___name'
  | 'coverImage___formats___medium___size'
  | 'coverImage___formats___medium___width'
  | 'coverImage___formats___medium___height'
  | 'coverImage___formats___thumbnail___ext'
  | 'coverImage___formats___thumbnail___url'
  | 'coverImage___formats___thumbnail___hash'
  | 'coverImage___formats___thumbnail___mime'
  | 'coverImage___formats___thumbnail___name'
  | 'coverImage___formats___thumbnail___size'
  | 'coverImage___formats___thumbnail___width'
  | 'coverImage___formats___thumbnail___height'
  | 'coverImage___formats___large___ext'
  | 'coverImage___formats___large___url'
  | 'coverImage___formats___large___hash'
  | 'coverImage___formats___large___mime'
  | 'coverImage___formats___large___name'
  | 'coverImage___formats___large___size'
  | 'coverImage___formats___large___width'
  | 'coverImage___formats___large___height'
  | 'coverImage___hash'
  | 'coverImage___ext'
  | 'coverImage___mime'
  | 'coverImage___size'
  | 'coverImage___url'
  | 'coverImage___createdAt'
  | 'coverImage___updatedAt'
  | 'coverImage___localFile___sourceInstanceName'
  | 'coverImage___localFile___absolutePath'
  | 'coverImage___localFile___relativePath'
  | 'coverImage___localFile___extension'
  | 'coverImage___localFile___size'
  | 'coverImage___localFile___prettySize'
  | 'coverImage___localFile___modifiedTime'
  | 'coverImage___localFile___accessTime'
  | 'coverImage___localFile___changeTime'
  | 'coverImage___localFile___birthTime'
  | 'coverImage___localFile___root'
  | 'coverImage___localFile___dir'
  | 'coverImage___localFile___base'
  | 'coverImage___localFile___ext'
  | 'coverImage___localFile___name'
  | 'coverImage___localFile___relativeDirectory'
  | 'coverImage___localFile___dev'
  | 'coverImage___localFile___mode'
  | 'coverImage___localFile___nlink'
  | 'coverImage___localFile___uid'
  | 'coverImage___localFile___gid'
  | 'coverImage___localFile___rdev'
  | 'coverImage___localFile___ino'
  | 'coverImage___localFile___atimeMs'
  | 'coverImage___localFile___mtimeMs'
  | 'coverImage___localFile___ctimeMs'
  | 'coverImage___localFile___atime'
  | 'coverImage___localFile___mtime'
  | 'coverImage___localFile___ctime'
  | 'coverImage___localFile___birthtime'
  | 'coverImage___localFile___birthtimeMs'
  | 'coverImage___localFile___blksize'
  | 'coverImage___localFile___blocks'
  | 'coverImage___localFile___url'
  | 'coverImage___localFile___publicURL'
  | 'coverImage___localFile___childrenImageSharp'
  | 'coverImage___localFile___childrenImageSharp___gatsbyImageData'
  | 'coverImage___localFile___childrenImageSharp___id'
  | 'coverImage___localFile___childrenImageSharp___children'
  | 'coverImage___localFile___childImageSharp___gatsbyImageData'
  | 'coverImage___localFile___childImageSharp___id'
  | 'coverImage___localFile___childImageSharp___children'
  | 'coverImage___localFile___id'
  | 'coverImage___localFile___parent___id'
  | 'coverImage___localFile___parent___children'
  | 'coverImage___localFile___children'
  | 'coverImage___localFile___children___id'
  | 'coverImage___localFile___children___children'
  | 'coverImage___localFile___internal___content'
  | 'coverImage___localFile___internal___contentDigest'
  | 'coverImage___localFile___internal___description'
  | 'coverImage___localFile___internal___fieldOwners'
  | 'coverImage___localFile___internal___ignoreType'
  | 'coverImage___localFile___internal___mediaType'
  | 'coverImage___localFile___internal___owner'
  | 'coverImage___localFile___internal___type'
  | 'coverImage___strapi_id'
  | 'images'
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
  | 'images___name'
  | 'images___alternativeText'
  | 'images___caption'
  | 'images___width'
  | 'images___height'
  | 'images___formats___small___ext'
  | 'images___formats___small___url'
  | 'images___formats___small___hash'
  | 'images___formats___small___mime'
  | 'images___formats___small___name'
  | 'images___formats___small___size'
  | 'images___formats___small___width'
  | 'images___formats___small___height'
  | 'images___formats___medium___ext'
  | 'images___formats___medium___url'
  | 'images___formats___medium___hash'
  | 'images___formats___medium___mime'
  | 'images___formats___medium___name'
  | 'images___formats___medium___size'
  | 'images___formats___medium___width'
  | 'images___formats___medium___height'
  | 'images___formats___thumbnail___ext'
  | 'images___formats___thumbnail___url'
  | 'images___formats___thumbnail___hash'
  | 'images___formats___thumbnail___mime'
  | 'images___formats___thumbnail___name'
  | 'images___formats___thumbnail___size'
  | 'images___formats___thumbnail___width'
  | 'images___formats___thumbnail___height'
  | 'images___formats___large___ext'
  | 'images___formats___large___url'
  | 'images___formats___large___hash'
  | 'images___formats___large___mime'
  | 'images___formats___large___name'
  | 'images___formats___large___size'
  | 'images___formats___large___width'
  | 'images___formats___large___height'
  | 'images___hash'
  | 'images___ext'
  | 'images___mime'
  | 'images___size'
  | 'images___url'
  | 'images___createdAt'
  | 'images___updatedAt'
  | 'images___localFile___sourceInstanceName'
  | 'images___localFile___absolutePath'
  | 'images___localFile___relativePath'
  | 'images___localFile___extension'
  | 'images___localFile___size'
  | 'images___localFile___prettySize'
  | 'images___localFile___modifiedTime'
  | 'images___localFile___accessTime'
  | 'images___localFile___changeTime'
  | 'images___localFile___birthTime'
  | 'images___localFile___root'
  | 'images___localFile___dir'
  | 'images___localFile___base'
  | 'images___localFile___ext'
  | 'images___localFile___name'
  | 'images___localFile___relativeDirectory'
  | 'images___localFile___dev'
  | 'images___localFile___mode'
  | 'images___localFile___nlink'
  | 'images___localFile___uid'
  | 'images___localFile___gid'
  | 'images___localFile___rdev'
  | 'images___localFile___ino'
  | 'images___localFile___atimeMs'
  | 'images___localFile___mtimeMs'
  | 'images___localFile___ctimeMs'
  | 'images___localFile___atime'
  | 'images___localFile___mtime'
  | 'images___localFile___ctime'
  | 'images___localFile___birthtime'
  | 'images___localFile___birthtimeMs'
  | 'images___localFile___blksize'
  | 'images___localFile___blocks'
  | 'images___localFile___url'
  | 'images___localFile___publicURL'
  | 'images___localFile___childrenImageSharp'
  | 'images___localFile___childrenImageSharp___gatsbyImageData'
  | 'images___localFile___childrenImageSharp___id'
  | 'images___localFile___childrenImageSharp___children'
  | 'images___localFile___childImageSharp___gatsbyImageData'
  | 'images___localFile___childImageSharp___id'
  | 'images___localFile___childImageSharp___children'
  | 'images___localFile___id'
  | 'images___localFile___parent___id'
  | 'images___localFile___parent___children'
  | 'images___localFile___children'
  | 'images___localFile___children___id'
  | 'images___localFile___children___children'
  | 'images___localFile___internal___content'
  | 'images___localFile___internal___contentDigest'
  | 'images___localFile___internal___description'
  | 'images___localFile___internal___fieldOwners'
  | 'images___localFile___internal___ignoreType'
  | 'images___localFile___internal___mediaType'
  | 'images___localFile___internal___owner'
  | 'images___localFile___internal___type'
  | 'images___strapi_id'
  | 'tags'
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
  | 'tags___name'
  | 'tags___createdAt'
  | 'tags___updatedAt'
  | 'tags___publishedAt'
  | 'tags___projects'
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
  | 'tags___projects___title'
  | 'tags___projects___name'
  | 'tags___projects___description___medias'
  | 'tags___projects___slug'
  | 'tags___projects___createdAt'
  | 'tags___projects___updatedAt'
  | 'tags___projects___publishedAt'
  | 'tags___projects___coverImage___id'
  | 'tags___projects___coverImage___children'
  | 'tags___projects___coverImage___name'
  | 'tags___projects___coverImage___alternativeText'
  | 'tags___projects___coverImage___caption'
  | 'tags___projects___coverImage___width'
  | 'tags___projects___coverImage___height'
  | 'tags___projects___coverImage___hash'
  | 'tags___projects___coverImage___ext'
  | 'tags___projects___coverImage___mime'
  | 'tags___projects___coverImage___size'
  | 'tags___projects___coverImage___url'
  | 'tags___projects___coverImage___createdAt'
  | 'tags___projects___coverImage___updatedAt'
  | 'tags___projects___coverImage___strapi_id'
  | 'tags___projects___images'
  | 'tags___projects___images___id'
  | 'tags___projects___images___children'
  | 'tags___projects___images___name'
  | 'tags___projects___images___alternativeText'
  | 'tags___projects___images___caption'
  | 'tags___projects___images___width'
  | 'tags___projects___images___height'
  | 'tags___projects___images___hash'
  | 'tags___projects___images___ext'
  | 'tags___projects___images___mime'
  | 'tags___projects___images___size'
  | 'tags___projects___images___url'
  | 'tags___projects___images___createdAt'
  | 'tags___projects___images___updatedAt'
  | 'tags___projects___images___strapi_id'
  | 'tags___projects___tags'
  | 'tags___projects___tags___id'
  | 'tags___projects___tags___children'
  | 'tags___projects___tags___name'
  | 'tags___projects___tags___createdAt'
  | 'tags___projects___tags___updatedAt'
  | 'tags___projects___tags___publishedAt'
  | 'tags___projects___tags___projects'
  | 'tags___projects___tags___areas'
  | 'tags___projects___tags___strapi_id'
  | 'tags___projects___areas'
  | 'tags___projects___areas___id'
  | 'tags___projects___areas___children'
  | 'tags___projects___areas___name'
  | 'tags___projects___areas___description'
  | 'tags___projects___areas___color'
  | 'tags___projects___areas___slug'
  | 'tags___projects___areas___createdAt'
  | 'tags___projects___areas___updatedAt'
  | 'tags___projects___areas___publishedAt'
  | 'tags___projects___areas___tags'
  | 'tags___projects___areas___projects'
  | 'tags___projects___areas___strapi_id'
  | 'tags___projects___organization___id'
  | 'tags___projects___organization___children'
  | 'tags___projects___organization___name'
  | 'tags___projects___organization___link'
  | 'tags___projects___organization___createdAt'
  | 'tags___projects___organization___updatedAt'
  | 'tags___projects___organization___publishedAt'
  | 'tags___projects___organization___projects'
  | 'tags___projects___organization___strapi_id'
  | 'tags___projects___links'
  | 'tags___projects___links___id'
  | 'tags___projects___links___children'
  | 'tags___projects___links___link'
  | 'tags___projects___links___label'
  | 'tags___projects___links___strapi_id'
  | 'tags___projects___strapi_id'
  | 'tags___projects___childrenStrapiProjectDescriptionTextnode'
  | 'tags___projects___childrenStrapiProjectDescriptionTextnode___id'
  | 'tags___projects___childrenStrapiProjectDescriptionTextnode___children'
  | 'tags___projects___childrenStrapiProjectDescriptionTextnode___description'
  | 'tags___projects___childStrapiProjectDescriptionTextnode___id'
  | 'tags___projects___childStrapiProjectDescriptionTextnode___children'
  | 'tags___projects___childStrapiProjectDescriptionTextnode___description'
  | 'tags___areas'
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
  | 'tags___areas___name'
  | 'tags___areas___description'
  | 'tags___areas___color'
  | 'tags___areas___slug'
  | 'tags___areas___createdAt'
  | 'tags___areas___updatedAt'
  | 'tags___areas___publishedAt'
  | 'tags___areas___tags'
  | 'tags___areas___tags___id'
  | 'tags___areas___tags___children'
  | 'tags___areas___tags___name'
  | 'tags___areas___tags___createdAt'
  | 'tags___areas___tags___updatedAt'
  | 'tags___areas___tags___publishedAt'
  | 'tags___areas___tags___projects'
  | 'tags___areas___tags___areas'
  | 'tags___areas___tags___strapi_id'
  | 'tags___areas___projects'
  | 'tags___areas___projects___id'
  | 'tags___areas___projects___children'
  | 'tags___areas___projects___title'
  | 'tags___areas___projects___name'
  | 'tags___areas___projects___slug'
  | 'tags___areas___projects___createdAt'
  | 'tags___areas___projects___updatedAt'
  | 'tags___areas___projects___publishedAt'
  | 'tags___areas___projects___images'
  | 'tags___areas___projects___tags'
  | 'tags___areas___projects___areas'
  | 'tags___areas___projects___links'
  | 'tags___areas___projects___strapi_id'
  | 'tags___areas___projects___childrenStrapiProjectDescriptionTextnode'
  | 'tags___areas___strapi_id'
  | 'tags___strapi_id'
  | 'areas'
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
  | 'areas___name'
  | 'areas___description'
  | 'areas___color'
  | 'areas___slug'
  | 'areas___createdAt'
  | 'areas___updatedAt'
  | 'areas___publishedAt'
  | 'areas___tags'
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
  | 'areas___tags___name'
  | 'areas___tags___createdAt'
  | 'areas___tags___updatedAt'
  | 'areas___tags___publishedAt'
  | 'areas___tags___projects'
  | 'areas___tags___projects___id'
  | 'areas___tags___projects___children'
  | 'areas___tags___projects___title'
  | 'areas___tags___projects___name'
  | 'areas___tags___projects___slug'
  | 'areas___tags___projects___createdAt'
  | 'areas___tags___projects___updatedAt'
  | 'areas___tags___projects___publishedAt'
  | 'areas___tags___projects___images'
  | 'areas___tags___projects___tags'
  | 'areas___tags___projects___areas'
  | 'areas___tags___projects___links'
  | 'areas___tags___projects___strapi_id'
  | 'areas___tags___projects___childrenStrapiProjectDescriptionTextnode'
  | 'areas___tags___areas'
  | 'areas___tags___areas___id'
  | 'areas___tags___areas___children'
  | 'areas___tags___areas___name'
  | 'areas___tags___areas___description'
  | 'areas___tags___areas___color'
  | 'areas___tags___areas___slug'
  | 'areas___tags___areas___createdAt'
  | 'areas___tags___areas___updatedAt'
  | 'areas___tags___areas___publishedAt'
  | 'areas___tags___areas___tags'
  | 'areas___tags___areas___projects'
  | 'areas___tags___areas___strapi_id'
  | 'areas___tags___strapi_id'
  | 'areas___projects'
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
  | 'areas___projects___title'
  | 'areas___projects___name'
  | 'areas___projects___description___medias'
  | 'areas___projects___slug'
  | 'areas___projects___createdAt'
  | 'areas___projects___updatedAt'
  | 'areas___projects___publishedAt'
  | 'areas___projects___coverImage___id'
  | 'areas___projects___coverImage___children'
  | 'areas___projects___coverImage___name'
  | 'areas___projects___coverImage___alternativeText'
  | 'areas___projects___coverImage___caption'
  | 'areas___projects___coverImage___width'
  | 'areas___projects___coverImage___height'
  | 'areas___projects___coverImage___hash'
  | 'areas___projects___coverImage___ext'
  | 'areas___projects___coverImage___mime'
  | 'areas___projects___coverImage___size'
  | 'areas___projects___coverImage___url'
  | 'areas___projects___coverImage___createdAt'
  | 'areas___projects___coverImage___updatedAt'
  | 'areas___projects___coverImage___strapi_id'
  | 'areas___projects___images'
  | 'areas___projects___images___id'
  | 'areas___projects___images___children'
  | 'areas___projects___images___name'
  | 'areas___projects___images___alternativeText'
  | 'areas___projects___images___caption'
  | 'areas___projects___images___width'
  | 'areas___projects___images___height'
  | 'areas___projects___images___hash'
  | 'areas___projects___images___ext'
  | 'areas___projects___images___mime'
  | 'areas___projects___images___size'
  | 'areas___projects___images___url'
  | 'areas___projects___images___createdAt'
  | 'areas___projects___images___updatedAt'
  | 'areas___projects___images___strapi_id'
  | 'areas___projects___tags'
  | 'areas___projects___tags___id'
  | 'areas___projects___tags___children'
  | 'areas___projects___tags___name'
  | 'areas___projects___tags___createdAt'
  | 'areas___projects___tags___updatedAt'
  | 'areas___projects___tags___publishedAt'
  | 'areas___projects___tags___projects'
  | 'areas___projects___tags___areas'
  | 'areas___projects___tags___strapi_id'
  | 'areas___projects___areas'
  | 'areas___projects___areas___id'
  | 'areas___projects___areas___children'
  | 'areas___projects___areas___name'
  | 'areas___projects___areas___description'
  | 'areas___projects___areas___color'
  | 'areas___projects___areas___slug'
  | 'areas___projects___areas___createdAt'
  | 'areas___projects___areas___updatedAt'
  | 'areas___projects___areas___publishedAt'
  | 'areas___projects___areas___tags'
  | 'areas___projects___areas___projects'
  | 'areas___projects___areas___strapi_id'
  | 'areas___projects___organization___id'
  | 'areas___projects___organization___children'
  | 'areas___projects___organization___name'
  | 'areas___projects___organization___link'
  | 'areas___projects___organization___createdAt'
  | 'areas___projects___organization___updatedAt'
  | 'areas___projects___organization___publishedAt'
  | 'areas___projects___organization___projects'
  | 'areas___projects___organization___strapi_id'
  | 'areas___projects___links'
  | 'areas___projects___links___id'
  | 'areas___projects___links___children'
  | 'areas___projects___links___link'
  | 'areas___projects___links___label'
  | 'areas___projects___links___strapi_id'
  | 'areas___projects___strapi_id'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode___id'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode___children'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode___description'
  | 'areas___projects___childStrapiProjectDescriptionTextnode___id'
  | 'areas___projects___childStrapiProjectDescriptionTextnode___children'
  | 'areas___projects___childStrapiProjectDescriptionTextnode___description'
  | 'areas___strapi_id'
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
  | 'organization___name'
  | 'organization___link'
  | 'organization___createdAt'
  | 'organization___updatedAt'
  | 'organization___publishedAt'
  | 'organization___projects'
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
  | 'organization___projects___title'
  | 'organization___projects___name'
  | 'organization___projects___description___medias'
  | 'organization___projects___slug'
  | 'organization___projects___createdAt'
  | 'organization___projects___updatedAt'
  | 'organization___projects___publishedAt'
  | 'organization___projects___coverImage___id'
  | 'organization___projects___coverImage___children'
  | 'organization___projects___coverImage___name'
  | 'organization___projects___coverImage___alternativeText'
  | 'organization___projects___coverImage___caption'
  | 'organization___projects___coverImage___width'
  | 'organization___projects___coverImage___height'
  | 'organization___projects___coverImage___hash'
  | 'organization___projects___coverImage___ext'
  | 'organization___projects___coverImage___mime'
  | 'organization___projects___coverImage___size'
  | 'organization___projects___coverImage___url'
  | 'organization___projects___coverImage___createdAt'
  | 'organization___projects___coverImage___updatedAt'
  | 'organization___projects___coverImage___strapi_id'
  | 'organization___projects___images'
  | 'organization___projects___images___id'
  | 'organization___projects___images___children'
  | 'organization___projects___images___name'
  | 'organization___projects___images___alternativeText'
  | 'organization___projects___images___caption'
  | 'organization___projects___images___width'
  | 'organization___projects___images___height'
  | 'organization___projects___images___hash'
  | 'organization___projects___images___ext'
  | 'organization___projects___images___mime'
  | 'organization___projects___images___size'
  | 'organization___projects___images___url'
  | 'organization___projects___images___createdAt'
  | 'organization___projects___images___updatedAt'
  | 'organization___projects___images___strapi_id'
  | 'organization___projects___tags'
  | 'organization___projects___tags___id'
  | 'organization___projects___tags___children'
  | 'organization___projects___tags___name'
  | 'organization___projects___tags___createdAt'
  | 'organization___projects___tags___updatedAt'
  | 'organization___projects___tags___publishedAt'
  | 'organization___projects___tags___projects'
  | 'organization___projects___tags___areas'
  | 'organization___projects___tags___strapi_id'
  | 'organization___projects___areas'
  | 'organization___projects___areas___id'
  | 'organization___projects___areas___children'
  | 'organization___projects___areas___name'
  | 'organization___projects___areas___description'
  | 'organization___projects___areas___color'
  | 'organization___projects___areas___slug'
  | 'organization___projects___areas___createdAt'
  | 'organization___projects___areas___updatedAt'
  | 'organization___projects___areas___publishedAt'
  | 'organization___projects___areas___tags'
  | 'organization___projects___areas___projects'
  | 'organization___projects___areas___strapi_id'
  | 'organization___projects___organization___id'
  | 'organization___projects___organization___children'
  | 'organization___projects___organization___name'
  | 'organization___projects___organization___link'
  | 'organization___projects___organization___createdAt'
  | 'organization___projects___organization___updatedAt'
  | 'organization___projects___organization___publishedAt'
  | 'organization___projects___organization___projects'
  | 'organization___projects___organization___strapi_id'
  | 'organization___projects___links'
  | 'organization___projects___links___id'
  | 'organization___projects___links___children'
  | 'organization___projects___links___link'
  | 'organization___projects___links___label'
  | 'organization___projects___links___strapi_id'
  | 'organization___projects___strapi_id'
  | 'organization___projects___childrenStrapiProjectDescriptionTextnode'
  | 'organization___projects___childrenStrapiProjectDescriptionTextnode___id'
  | 'organization___projects___childrenStrapiProjectDescriptionTextnode___children'
  | 'organization___projects___childrenStrapiProjectDescriptionTextnode___description'
  | 'organization___projects___childStrapiProjectDescriptionTextnode___id'
  | 'organization___projects___childStrapiProjectDescriptionTextnode___children'
  | 'organization___projects___childStrapiProjectDescriptionTextnode___description'
  | 'organization___strapi_id'
  | 'links'
  | 'links___id'
  | 'links___parent___id'
  | 'links___parent___parent___id'
  | 'links___parent___parent___children'
  | 'links___parent___children'
  | 'links___parent___children___id'
  | 'links___parent___children___children'
  | 'links___parent___internal___content'
  | 'links___parent___internal___contentDigest'
  | 'links___parent___internal___description'
  | 'links___parent___internal___fieldOwners'
  | 'links___parent___internal___ignoreType'
  | 'links___parent___internal___mediaType'
  | 'links___parent___internal___owner'
  | 'links___parent___internal___type'
  | 'links___children'
  | 'links___children___id'
  | 'links___children___parent___id'
  | 'links___children___parent___children'
  | 'links___children___children'
  | 'links___children___children___id'
  | 'links___children___children___children'
  | 'links___children___internal___content'
  | 'links___children___internal___contentDigest'
  | 'links___children___internal___description'
  | 'links___children___internal___fieldOwners'
  | 'links___children___internal___ignoreType'
  | 'links___children___internal___mediaType'
  | 'links___children___internal___owner'
  | 'links___children___internal___type'
  | 'links___internal___content'
  | 'links___internal___contentDigest'
  | 'links___internal___description'
  | 'links___internal___fieldOwners'
  | 'links___internal___ignoreType'
  | 'links___internal___mediaType'
  | 'links___internal___owner'
  | 'links___internal___type'
  | 'links___link'
  | 'links___label'
  | 'links___strapi_id'
  | 'strapi_id'
  | 'childrenStrapiProjectDescriptionTextnode'
  | 'childrenStrapiProjectDescriptionTextnode___id'
  | 'childrenStrapiProjectDescriptionTextnode___parent___id'
  | 'childrenStrapiProjectDescriptionTextnode___parent___parent___id'
  | 'childrenStrapiProjectDescriptionTextnode___parent___parent___children'
  | 'childrenStrapiProjectDescriptionTextnode___parent___children'
  | 'childrenStrapiProjectDescriptionTextnode___parent___children___id'
  | 'childrenStrapiProjectDescriptionTextnode___parent___children___children'
  | 'childrenStrapiProjectDescriptionTextnode___parent___internal___content'
  | 'childrenStrapiProjectDescriptionTextnode___parent___internal___contentDigest'
  | 'childrenStrapiProjectDescriptionTextnode___parent___internal___description'
  | 'childrenStrapiProjectDescriptionTextnode___parent___internal___fieldOwners'
  | 'childrenStrapiProjectDescriptionTextnode___parent___internal___ignoreType'
  | 'childrenStrapiProjectDescriptionTextnode___parent___internal___mediaType'
  | 'childrenStrapiProjectDescriptionTextnode___parent___internal___owner'
  | 'childrenStrapiProjectDescriptionTextnode___parent___internal___type'
  | 'childrenStrapiProjectDescriptionTextnode___children'
  | 'childrenStrapiProjectDescriptionTextnode___children___id'
  | 'childrenStrapiProjectDescriptionTextnode___children___parent___id'
  | 'childrenStrapiProjectDescriptionTextnode___children___parent___children'
  | 'childrenStrapiProjectDescriptionTextnode___children___children'
  | 'childrenStrapiProjectDescriptionTextnode___children___children___id'
  | 'childrenStrapiProjectDescriptionTextnode___children___children___children'
  | 'childrenStrapiProjectDescriptionTextnode___children___internal___content'
  | 'childrenStrapiProjectDescriptionTextnode___children___internal___contentDigest'
  | 'childrenStrapiProjectDescriptionTextnode___children___internal___description'
  | 'childrenStrapiProjectDescriptionTextnode___children___internal___fieldOwners'
  | 'childrenStrapiProjectDescriptionTextnode___children___internal___ignoreType'
  | 'childrenStrapiProjectDescriptionTextnode___children___internal___mediaType'
  | 'childrenStrapiProjectDescriptionTextnode___children___internal___owner'
  | 'childrenStrapiProjectDescriptionTextnode___children___internal___type'
  | 'childrenStrapiProjectDescriptionTextnode___internal___content'
  | 'childrenStrapiProjectDescriptionTextnode___internal___contentDigest'
  | 'childrenStrapiProjectDescriptionTextnode___internal___description'
  | 'childrenStrapiProjectDescriptionTextnode___internal___fieldOwners'
  | 'childrenStrapiProjectDescriptionTextnode___internal___ignoreType'
  | 'childrenStrapiProjectDescriptionTextnode___internal___mediaType'
  | 'childrenStrapiProjectDescriptionTextnode___internal___owner'
  | 'childrenStrapiProjectDescriptionTextnode___internal___type'
  | 'childrenStrapiProjectDescriptionTextnode___description'
  | 'childStrapiProjectDescriptionTextnode___id'
  | 'childStrapiProjectDescriptionTextnode___parent___id'
  | 'childStrapiProjectDescriptionTextnode___parent___parent___id'
  | 'childStrapiProjectDescriptionTextnode___parent___parent___children'
  | 'childStrapiProjectDescriptionTextnode___parent___children'
  | 'childStrapiProjectDescriptionTextnode___parent___children___id'
  | 'childStrapiProjectDescriptionTextnode___parent___children___children'
  | 'childStrapiProjectDescriptionTextnode___parent___internal___content'
  | 'childStrapiProjectDescriptionTextnode___parent___internal___contentDigest'
  | 'childStrapiProjectDescriptionTextnode___parent___internal___description'
  | 'childStrapiProjectDescriptionTextnode___parent___internal___fieldOwners'
  | 'childStrapiProjectDescriptionTextnode___parent___internal___ignoreType'
  | 'childStrapiProjectDescriptionTextnode___parent___internal___mediaType'
  | 'childStrapiProjectDescriptionTextnode___parent___internal___owner'
  | 'childStrapiProjectDescriptionTextnode___parent___internal___type'
  | 'childStrapiProjectDescriptionTextnode___children'
  | 'childStrapiProjectDescriptionTextnode___children___id'
  | 'childStrapiProjectDescriptionTextnode___children___parent___id'
  | 'childStrapiProjectDescriptionTextnode___children___parent___children'
  | 'childStrapiProjectDescriptionTextnode___children___children'
  | 'childStrapiProjectDescriptionTextnode___children___children___id'
  | 'childStrapiProjectDescriptionTextnode___children___children___children'
  | 'childStrapiProjectDescriptionTextnode___children___internal___content'
  | 'childStrapiProjectDescriptionTextnode___children___internal___contentDigest'
  | 'childStrapiProjectDescriptionTextnode___children___internal___description'
  | 'childStrapiProjectDescriptionTextnode___children___internal___fieldOwners'
  | 'childStrapiProjectDescriptionTextnode___children___internal___ignoreType'
  | 'childStrapiProjectDescriptionTextnode___children___internal___mediaType'
  | 'childStrapiProjectDescriptionTextnode___children___internal___owner'
  | 'childStrapiProjectDescriptionTextnode___children___internal___type'
  | 'childStrapiProjectDescriptionTextnode___internal___content'
  | 'childStrapiProjectDescriptionTextnode___internal___contentDigest'
  | 'childStrapiProjectDescriptionTextnode___internal___description'
  | 'childStrapiProjectDescriptionTextnode___internal___fieldOwners'
  | 'childStrapiProjectDescriptionTextnode___internal___ignoreType'
  | 'childStrapiProjectDescriptionTextnode___internal___mediaType'
  | 'childStrapiProjectDescriptionTextnode___internal___owner'
  | 'childStrapiProjectDescriptionTextnode___internal___type'
  | 'childStrapiProjectDescriptionTextnode___description';

export type Strapi_ProjectGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_ProjectEdge>;
  nodes: Array<Strapi_Project>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_ProjectGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi_ProjectGroupConnectionDistinctArgs = {
  field: Strapi_ProjectFieldsEnum;
};


export type Strapi_ProjectGroupConnectionMaxArgs = {
  field: Strapi_ProjectFieldsEnum;
};


export type Strapi_ProjectGroupConnectionMinArgs = {
  field: Strapi_ProjectFieldsEnum;
};


export type Strapi_ProjectGroupConnectionSumArgs = {
  field: Strapi_ProjectFieldsEnum;
};


export type Strapi_ProjectGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_ProjectFieldsEnum;
};

export type Strapi_ProjectSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_ProjectFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi_OrganizationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_OrganizationEdge>;
  nodes: Array<Strapi_Organization>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_OrganizationGroupConnection>;
};


export type Strapi_OrganizationConnectionDistinctArgs = {
  field: Strapi_OrganizationFieldsEnum;
};


export type Strapi_OrganizationConnectionMaxArgs = {
  field: Strapi_OrganizationFieldsEnum;
};


export type Strapi_OrganizationConnectionMinArgs = {
  field: Strapi_OrganizationFieldsEnum;
};


export type Strapi_OrganizationConnectionSumArgs = {
  field: Strapi_OrganizationFieldsEnum;
};


export type Strapi_OrganizationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_OrganizationFieldsEnum;
};

export type Strapi_OrganizationEdge = {
  next?: Maybe<Strapi_Organization>;
  node: Strapi_Organization;
  previous?: Maybe<Strapi_Organization>;
};

export type Strapi_OrganizationFieldsEnum =
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
  | 'name'
  | 'link'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'projects'
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
  | 'projects___title'
  | 'projects___name'
  | 'projects___description___medias'
  | 'projects___description___medias___alternativeText'
  | 'projects___description___medias___url'
  | 'projects___description___medias___src'
  | 'projects___description___data___id'
  | 'projects___description___data___children'
  | 'projects___description___data___description'
  | 'projects___slug'
  | 'projects___createdAt'
  | 'projects___updatedAt'
  | 'projects___publishedAt'
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
  | 'projects___coverImage___name'
  | 'projects___coverImage___alternativeText'
  | 'projects___coverImage___caption'
  | 'projects___coverImage___width'
  | 'projects___coverImage___height'
  | 'projects___coverImage___hash'
  | 'projects___coverImage___ext'
  | 'projects___coverImage___mime'
  | 'projects___coverImage___size'
  | 'projects___coverImage___url'
  | 'projects___coverImage___createdAt'
  | 'projects___coverImage___updatedAt'
  | 'projects___coverImage___localFile___sourceInstanceName'
  | 'projects___coverImage___localFile___absolutePath'
  | 'projects___coverImage___localFile___relativePath'
  | 'projects___coverImage___localFile___extension'
  | 'projects___coverImage___localFile___size'
  | 'projects___coverImage___localFile___prettySize'
  | 'projects___coverImage___localFile___modifiedTime'
  | 'projects___coverImage___localFile___accessTime'
  | 'projects___coverImage___localFile___changeTime'
  | 'projects___coverImage___localFile___birthTime'
  | 'projects___coverImage___localFile___root'
  | 'projects___coverImage___localFile___dir'
  | 'projects___coverImage___localFile___base'
  | 'projects___coverImage___localFile___ext'
  | 'projects___coverImage___localFile___name'
  | 'projects___coverImage___localFile___relativeDirectory'
  | 'projects___coverImage___localFile___dev'
  | 'projects___coverImage___localFile___mode'
  | 'projects___coverImage___localFile___nlink'
  | 'projects___coverImage___localFile___uid'
  | 'projects___coverImage___localFile___gid'
  | 'projects___coverImage___localFile___rdev'
  | 'projects___coverImage___localFile___ino'
  | 'projects___coverImage___localFile___atimeMs'
  | 'projects___coverImage___localFile___mtimeMs'
  | 'projects___coverImage___localFile___ctimeMs'
  | 'projects___coverImage___localFile___atime'
  | 'projects___coverImage___localFile___mtime'
  | 'projects___coverImage___localFile___ctime'
  | 'projects___coverImage___localFile___birthtime'
  | 'projects___coverImage___localFile___birthtimeMs'
  | 'projects___coverImage___localFile___blksize'
  | 'projects___coverImage___localFile___blocks'
  | 'projects___coverImage___localFile___url'
  | 'projects___coverImage___localFile___publicURL'
  | 'projects___coverImage___localFile___childrenImageSharp'
  | 'projects___coverImage___localFile___id'
  | 'projects___coverImage___localFile___children'
  | 'projects___coverImage___strapi_id'
  | 'projects___images'
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
  | 'projects___images___name'
  | 'projects___images___alternativeText'
  | 'projects___images___caption'
  | 'projects___images___width'
  | 'projects___images___height'
  | 'projects___images___hash'
  | 'projects___images___ext'
  | 'projects___images___mime'
  | 'projects___images___size'
  | 'projects___images___url'
  | 'projects___images___createdAt'
  | 'projects___images___updatedAt'
  | 'projects___images___localFile___sourceInstanceName'
  | 'projects___images___localFile___absolutePath'
  | 'projects___images___localFile___relativePath'
  | 'projects___images___localFile___extension'
  | 'projects___images___localFile___size'
  | 'projects___images___localFile___prettySize'
  | 'projects___images___localFile___modifiedTime'
  | 'projects___images___localFile___accessTime'
  | 'projects___images___localFile___changeTime'
  | 'projects___images___localFile___birthTime'
  | 'projects___images___localFile___root'
  | 'projects___images___localFile___dir'
  | 'projects___images___localFile___base'
  | 'projects___images___localFile___ext'
  | 'projects___images___localFile___name'
  | 'projects___images___localFile___relativeDirectory'
  | 'projects___images___localFile___dev'
  | 'projects___images___localFile___mode'
  | 'projects___images___localFile___nlink'
  | 'projects___images___localFile___uid'
  | 'projects___images___localFile___gid'
  | 'projects___images___localFile___rdev'
  | 'projects___images___localFile___ino'
  | 'projects___images___localFile___atimeMs'
  | 'projects___images___localFile___mtimeMs'
  | 'projects___images___localFile___ctimeMs'
  | 'projects___images___localFile___atime'
  | 'projects___images___localFile___mtime'
  | 'projects___images___localFile___ctime'
  | 'projects___images___localFile___birthtime'
  | 'projects___images___localFile___birthtimeMs'
  | 'projects___images___localFile___blksize'
  | 'projects___images___localFile___blocks'
  | 'projects___images___localFile___url'
  | 'projects___images___localFile___publicURL'
  | 'projects___images___localFile___childrenImageSharp'
  | 'projects___images___localFile___id'
  | 'projects___images___localFile___children'
  | 'projects___images___strapi_id'
  | 'projects___tags'
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
  | 'projects___tags___name'
  | 'projects___tags___createdAt'
  | 'projects___tags___updatedAt'
  | 'projects___tags___publishedAt'
  | 'projects___tags___projects'
  | 'projects___tags___projects___id'
  | 'projects___tags___projects___children'
  | 'projects___tags___projects___title'
  | 'projects___tags___projects___name'
  | 'projects___tags___projects___slug'
  | 'projects___tags___projects___createdAt'
  | 'projects___tags___projects___updatedAt'
  | 'projects___tags___projects___publishedAt'
  | 'projects___tags___projects___images'
  | 'projects___tags___projects___tags'
  | 'projects___tags___projects___areas'
  | 'projects___tags___projects___links'
  | 'projects___tags___projects___strapi_id'
  | 'projects___tags___projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___tags___areas'
  | 'projects___tags___areas___id'
  | 'projects___tags___areas___children'
  | 'projects___tags___areas___name'
  | 'projects___tags___areas___description'
  | 'projects___tags___areas___color'
  | 'projects___tags___areas___slug'
  | 'projects___tags___areas___createdAt'
  | 'projects___tags___areas___updatedAt'
  | 'projects___tags___areas___publishedAt'
  | 'projects___tags___areas___tags'
  | 'projects___tags___areas___projects'
  | 'projects___tags___areas___strapi_id'
  | 'projects___tags___strapi_id'
  | 'projects___areas'
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
  | 'projects___areas___name'
  | 'projects___areas___description'
  | 'projects___areas___color'
  | 'projects___areas___slug'
  | 'projects___areas___createdAt'
  | 'projects___areas___updatedAt'
  | 'projects___areas___publishedAt'
  | 'projects___areas___tags'
  | 'projects___areas___tags___id'
  | 'projects___areas___tags___children'
  | 'projects___areas___tags___name'
  | 'projects___areas___tags___createdAt'
  | 'projects___areas___tags___updatedAt'
  | 'projects___areas___tags___publishedAt'
  | 'projects___areas___tags___projects'
  | 'projects___areas___tags___areas'
  | 'projects___areas___tags___strapi_id'
  | 'projects___areas___projects'
  | 'projects___areas___projects___id'
  | 'projects___areas___projects___children'
  | 'projects___areas___projects___title'
  | 'projects___areas___projects___name'
  | 'projects___areas___projects___slug'
  | 'projects___areas___projects___createdAt'
  | 'projects___areas___projects___updatedAt'
  | 'projects___areas___projects___publishedAt'
  | 'projects___areas___projects___images'
  | 'projects___areas___projects___tags'
  | 'projects___areas___projects___areas'
  | 'projects___areas___projects___links'
  | 'projects___areas___projects___strapi_id'
  | 'projects___areas___projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___areas___strapi_id'
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
  | 'projects___organization___name'
  | 'projects___organization___link'
  | 'projects___organization___createdAt'
  | 'projects___organization___updatedAt'
  | 'projects___organization___publishedAt'
  | 'projects___organization___projects'
  | 'projects___organization___projects___id'
  | 'projects___organization___projects___children'
  | 'projects___organization___projects___title'
  | 'projects___organization___projects___name'
  | 'projects___organization___projects___slug'
  | 'projects___organization___projects___createdAt'
  | 'projects___organization___projects___updatedAt'
  | 'projects___organization___projects___publishedAt'
  | 'projects___organization___projects___images'
  | 'projects___organization___projects___tags'
  | 'projects___organization___projects___areas'
  | 'projects___organization___projects___links'
  | 'projects___organization___projects___strapi_id'
  | 'projects___organization___projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___organization___strapi_id'
  | 'projects___links'
  | 'projects___links___id'
  | 'projects___links___parent___id'
  | 'projects___links___parent___children'
  | 'projects___links___children'
  | 'projects___links___children___id'
  | 'projects___links___children___children'
  | 'projects___links___internal___content'
  | 'projects___links___internal___contentDigest'
  | 'projects___links___internal___description'
  | 'projects___links___internal___fieldOwners'
  | 'projects___links___internal___ignoreType'
  | 'projects___links___internal___mediaType'
  | 'projects___links___internal___owner'
  | 'projects___links___internal___type'
  | 'projects___links___link'
  | 'projects___links___label'
  | 'projects___links___strapi_id'
  | 'projects___strapi_id'
  | 'projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___childrenStrapiProjectDescriptionTextnode___id'
  | 'projects___childrenStrapiProjectDescriptionTextnode___parent___id'
  | 'projects___childrenStrapiProjectDescriptionTextnode___parent___children'
  | 'projects___childrenStrapiProjectDescriptionTextnode___children'
  | 'projects___childrenStrapiProjectDescriptionTextnode___children___id'
  | 'projects___childrenStrapiProjectDescriptionTextnode___children___children'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___content'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___contentDigest'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___description'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___fieldOwners'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___ignoreType'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___mediaType'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___owner'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___type'
  | 'projects___childrenStrapiProjectDescriptionTextnode___description'
  | 'projects___childStrapiProjectDescriptionTextnode___id'
  | 'projects___childStrapiProjectDescriptionTextnode___parent___id'
  | 'projects___childStrapiProjectDescriptionTextnode___parent___children'
  | 'projects___childStrapiProjectDescriptionTextnode___children'
  | 'projects___childStrapiProjectDescriptionTextnode___children___id'
  | 'projects___childStrapiProjectDescriptionTextnode___children___children'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___content'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___contentDigest'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___description'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___fieldOwners'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___ignoreType'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___mediaType'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___owner'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___type'
  | 'projects___childStrapiProjectDescriptionTextnode___description'
  | 'strapi_id';

export type Strapi_OrganizationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_OrganizationEdge>;
  nodes: Array<Strapi_Organization>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_OrganizationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi_OrganizationGroupConnectionDistinctArgs = {
  field: Strapi_OrganizationFieldsEnum;
};


export type Strapi_OrganizationGroupConnectionMaxArgs = {
  field: Strapi_OrganizationFieldsEnum;
};


export type Strapi_OrganizationGroupConnectionMinArgs = {
  field: Strapi_OrganizationFieldsEnum;
};


export type Strapi_OrganizationGroupConnectionSumArgs = {
  field: Strapi_OrganizationFieldsEnum;
};


export type Strapi_OrganizationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_OrganizationFieldsEnum;
};

export type Strapi_OrganizationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_OrganizationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi_HomeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_HomeEdge>;
  nodes: Array<Strapi_Home>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_HomeGroupConnection>;
};


export type Strapi_HomeConnectionDistinctArgs = {
  field: Strapi_HomeFieldsEnum;
};


export type Strapi_HomeConnectionMaxArgs = {
  field: Strapi_HomeFieldsEnum;
};


export type Strapi_HomeConnectionMinArgs = {
  field: Strapi_HomeFieldsEnum;
};


export type Strapi_HomeConnectionSumArgs = {
  field: Strapi_HomeFieldsEnum;
};


export type Strapi_HomeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_HomeFieldsEnum;
};

export type Strapi_HomeEdge = {
  next?: Maybe<Strapi_Home>;
  node: Strapi_Home;
  previous?: Maybe<Strapi_Home>;
};

export type Strapi_HomeFieldsEnum =
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
  | 'title'
  | 'introText'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'seo___id'
  | 'seo___parent___id'
  | 'seo___parent___parent___id'
  | 'seo___parent___parent___children'
  | 'seo___parent___children'
  | 'seo___parent___children___id'
  | 'seo___parent___children___children'
  | 'seo___parent___internal___content'
  | 'seo___parent___internal___contentDigest'
  | 'seo___parent___internal___description'
  | 'seo___parent___internal___fieldOwners'
  | 'seo___parent___internal___ignoreType'
  | 'seo___parent___internal___mediaType'
  | 'seo___parent___internal___owner'
  | 'seo___parent___internal___type'
  | 'seo___children'
  | 'seo___children___id'
  | 'seo___children___parent___id'
  | 'seo___children___parent___children'
  | 'seo___children___children'
  | 'seo___children___children___id'
  | 'seo___children___children___children'
  | 'seo___children___internal___content'
  | 'seo___children___internal___contentDigest'
  | 'seo___children___internal___description'
  | 'seo___children___internal___fieldOwners'
  | 'seo___children___internal___ignoreType'
  | 'seo___children___internal___mediaType'
  | 'seo___children___internal___owner'
  | 'seo___children___internal___type'
  | 'seo___internal___content'
  | 'seo___internal___contentDigest'
  | 'seo___internal___description'
  | 'seo___internal___fieldOwners'
  | 'seo___internal___ignoreType'
  | 'seo___internal___mediaType'
  | 'seo___internal___owner'
  | 'seo___internal___type'
  | 'seo___metaTitle'
  | 'seo___metaDescription'
  | 'seo___strapi_id'
  | 'contact___id'
  | 'contact___parent___id'
  | 'contact___parent___parent___id'
  | 'contact___parent___parent___children'
  | 'contact___parent___children'
  | 'contact___parent___children___id'
  | 'contact___parent___children___children'
  | 'contact___parent___internal___content'
  | 'contact___parent___internal___contentDigest'
  | 'contact___parent___internal___description'
  | 'contact___parent___internal___fieldOwners'
  | 'contact___parent___internal___ignoreType'
  | 'contact___parent___internal___mediaType'
  | 'contact___parent___internal___owner'
  | 'contact___parent___internal___type'
  | 'contact___children'
  | 'contact___children___id'
  | 'contact___children___parent___id'
  | 'contact___children___parent___children'
  | 'contact___children___children'
  | 'contact___children___children___id'
  | 'contact___children___children___children'
  | 'contact___children___internal___content'
  | 'contact___children___internal___contentDigest'
  | 'contact___children___internal___description'
  | 'contact___children___internal___fieldOwners'
  | 'contact___children___internal___ignoreType'
  | 'contact___children___internal___mediaType'
  | 'contact___children___internal___owner'
  | 'contact___children___internal___type'
  | 'contact___internal___content'
  | 'contact___internal___contentDigest'
  | 'contact___internal___description'
  | 'contact___internal___fieldOwners'
  | 'contact___internal___ignoreType'
  | 'contact___internal___mediaType'
  | 'contact___internal___owner'
  | 'contact___internal___type'
  | 'contact___text'
  | 'contact___button___id'
  | 'contact___button___parent___id'
  | 'contact___button___parent___children'
  | 'contact___button___children'
  | 'contact___button___children___id'
  | 'contact___button___children___children'
  | 'contact___button___internal___content'
  | 'contact___button___internal___contentDigest'
  | 'contact___button___internal___description'
  | 'contact___button___internal___fieldOwners'
  | 'contact___button___internal___ignoreType'
  | 'contact___button___internal___mediaType'
  | 'contact___button___internal___owner'
  | 'contact___button___internal___type'
  | 'contact___button___link'
  | 'contact___button___label'
  | 'contact___button___strapi_id'
  | 'contact___strapi_id'
  | 'profile___id'
  | 'profile___parent___id'
  | 'profile___parent___parent___id'
  | 'profile___parent___parent___children'
  | 'profile___parent___children'
  | 'profile___parent___children___id'
  | 'profile___parent___children___children'
  | 'profile___parent___internal___content'
  | 'profile___parent___internal___contentDigest'
  | 'profile___parent___internal___description'
  | 'profile___parent___internal___fieldOwners'
  | 'profile___parent___internal___ignoreType'
  | 'profile___parent___internal___mediaType'
  | 'profile___parent___internal___owner'
  | 'profile___parent___internal___type'
  | 'profile___children'
  | 'profile___children___id'
  | 'profile___children___parent___id'
  | 'profile___children___parent___children'
  | 'profile___children___children'
  | 'profile___children___children___id'
  | 'profile___children___children___children'
  | 'profile___children___internal___content'
  | 'profile___children___internal___contentDigest'
  | 'profile___children___internal___description'
  | 'profile___children___internal___fieldOwners'
  | 'profile___children___internal___ignoreType'
  | 'profile___children___internal___mediaType'
  | 'profile___children___internal___owner'
  | 'profile___children___internal___type'
  | 'profile___internal___content'
  | 'profile___internal___contentDigest'
  | 'profile___internal___description'
  | 'profile___internal___fieldOwners'
  | 'profile___internal___ignoreType'
  | 'profile___internal___mediaType'
  | 'profile___internal___owner'
  | 'profile___internal___type'
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
  | 'profile___picture___name'
  | 'profile___picture___alternativeText'
  | 'profile___picture___caption'
  | 'profile___picture___width'
  | 'profile___picture___height'
  | 'profile___picture___hash'
  | 'profile___picture___ext'
  | 'profile___picture___mime'
  | 'profile___picture___size'
  | 'profile___picture___url'
  | 'profile___picture___createdAt'
  | 'profile___picture___updatedAt'
  | 'profile___picture___localFile___sourceInstanceName'
  | 'profile___picture___localFile___absolutePath'
  | 'profile___picture___localFile___relativePath'
  | 'profile___picture___localFile___extension'
  | 'profile___picture___localFile___size'
  | 'profile___picture___localFile___prettySize'
  | 'profile___picture___localFile___modifiedTime'
  | 'profile___picture___localFile___accessTime'
  | 'profile___picture___localFile___changeTime'
  | 'profile___picture___localFile___birthTime'
  | 'profile___picture___localFile___root'
  | 'profile___picture___localFile___dir'
  | 'profile___picture___localFile___base'
  | 'profile___picture___localFile___ext'
  | 'profile___picture___localFile___name'
  | 'profile___picture___localFile___relativeDirectory'
  | 'profile___picture___localFile___dev'
  | 'profile___picture___localFile___mode'
  | 'profile___picture___localFile___nlink'
  | 'profile___picture___localFile___uid'
  | 'profile___picture___localFile___gid'
  | 'profile___picture___localFile___rdev'
  | 'profile___picture___localFile___ino'
  | 'profile___picture___localFile___atimeMs'
  | 'profile___picture___localFile___mtimeMs'
  | 'profile___picture___localFile___ctimeMs'
  | 'profile___picture___localFile___atime'
  | 'profile___picture___localFile___mtime'
  | 'profile___picture___localFile___ctime'
  | 'profile___picture___localFile___birthtime'
  | 'profile___picture___localFile___birthtimeMs'
  | 'profile___picture___localFile___blksize'
  | 'profile___picture___localFile___blocks'
  | 'profile___picture___localFile___url'
  | 'profile___picture___localFile___publicURL'
  | 'profile___picture___localFile___childrenImageSharp'
  | 'profile___picture___localFile___id'
  | 'profile___picture___localFile___children'
  | 'profile___picture___strapi_id'
  | 'profile___qualities'
  | 'profile___qualities___id'
  | 'profile___qualities___parent___id'
  | 'profile___qualities___parent___children'
  | 'profile___qualities___children'
  | 'profile___qualities___children___id'
  | 'profile___qualities___children___children'
  | 'profile___qualities___internal___content'
  | 'profile___qualities___internal___contentDigest'
  | 'profile___qualities___internal___description'
  | 'profile___qualities___internal___fieldOwners'
  | 'profile___qualities___internal___ignoreType'
  | 'profile___qualities___internal___mediaType'
  | 'profile___qualities___internal___owner'
  | 'profile___qualities___internal___type'
  | 'profile___qualities___text'
  | 'profile___qualities___strapi_id'
  | 'profile___strapi_id'
  | 'areas'
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
  | 'areas___name'
  | 'areas___description'
  | 'areas___color'
  | 'areas___slug'
  | 'areas___createdAt'
  | 'areas___updatedAt'
  | 'areas___publishedAt'
  | 'areas___tags'
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
  | 'areas___tags___name'
  | 'areas___tags___createdAt'
  | 'areas___tags___updatedAt'
  | 'areas___tags___publishedAt'
  | 'areas___tags___projects'
  | 'areas___tags___projects___id'
  | 'areas___tags___projects___children'
  | 'areas___tags___projects___title'
  | 'areas___tags___projects___name'
  | 'areas___tags___projects___slug'
  | 'areas___tags___projects___createdAt'
  | 'areas___tags___projects___updatedAt'
  | 'areas___tags___projects___publishedAt'
  | 'areas___tags___projects___images'
  | 'areas___tags___projects___tags'
  | 'areas___tags___projects___areas'
  | 'areas___tags___projects___links'
  | 'areas___tags___projects___strapi_id'
  | 'areas___tags___projects___childrenStrapiProjectDescriptionTextnode'
  | 'areas___tags___areas'
  | 'areas___tags___areas___id'
  | 'areas___tags___areas___children'
  | 'areas___tags___areas___name'
  | 'areas___tags___areas___description'
  | 'areas___tags___areas___color'
  | 'areas___tags___areas___slug'
  | 'areas___tags___areas___createdAt'
  | 'areas___tags___areas___updatedAt'
  | 'areas___tags___areas___publishedAt'
  | 'areas___tags___areas___tags'
  | 'areas___tags___areas___projects'
  | 'areas___tags___areas___strapi_id'
  | 'areas___tags___strapi_id'
  | 'areas___projects'
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
  | 'areas___projects___title'
  | 'areas___projects___name'
  | 'areas___projects___description___medias'
  | 'areas___projects___slug'
  | 'areas___projects___createdAt'
  | 'areas___projects___updatedAt'
  | 'areas___projects___publishedAt'
  | 'areas___projects___coverImage___id'
  | 'areas___projects___coverImage___children'
  | 'areas___projects___coverImage___name'
  | 'areas___projects___coverImage___alternativeText'
  | 'areas___projects___coverImage___caption'
  | 'areas___projects___coverImage___width'
  | 'areas___projects___coverImage___height'
  | 'areas___projects___coverImage___hash'
  | 'areas___projects___coverImage___ext'
  | 'areas___projects___coverImage___mime'
  | 'areas___projects___coverImage___size'
  | 'areas___projects___coverImage___url'
  | 'areas___projects___coverImage___createdAt'
  | 'areas___projects___coverImage___updatedAt'
  | 'areas___projects___coverImage___strapi_id'
  | 'areas___projects___images'
  | 'areas___projects___images___id'
  | 'areas___projects___images___children'
  | 'areas___projects___images___name'
  | 'areas___projects___images___alternativeText'
  | 'areas___projects___images___caption'
  | 'areas___projects___images___width'
  | 'areas___projects___images___height'
  | 'areas___projects___images___hash'
  | 'areas___projects___images___ext'
  | 'areas___projects___images___mime'
  | 'areas___projects___images___size'
  | 'areas___projects___images___url'
  | 'areas___projects___images___createdAt'
  | 'areas___projects___images___updatedAt'
  | 'areas___projects___images___strapi_id'
  | 'areas___projects___tags'
  | 'areas___projects___tags___id'
  | 'areas___projects___tags___children'
  | 'areas___projects___tags___name'
  | 'areas___projects___tags___createdAt'
  | 'areas___projects___tags___updatedAt'
  | 'areas___projects___tags___publishedAt'
  | 'areas___projects___tags___projects'
  | 'areas___projects___tags___areas'
  | 'areas___projects___tags___strapi_id'
  | 'areas___projects___areas'
  | 'areas___projects___areas___id'
  | 'areas___projects___areas___children'
  | 'areas___projects___areas___name'
  | 'areas___projects___areas___description'
  | 'areas___projects___areas___color'
  | 'areas___projects___areas___slug'
  | 'areas___projects___areas___createdAt'
  | 'areas___projects___areas___updatedAt'
  | 'areas___projects___areas___publishedAt'
  | 'areas___projects___areas___tags'
  | 'areas___projects___areas___projects'
  | 'areas___projects___areas___strapi_id'
  | 'areas___projects___organization___id'
  | 'areas___projects___organization___children'
  | 'areas___projects___organization___name'
  | 'areas___projects___organization___link'
  | 'areas___projects___organization___createdAt'
  | 'areas___projects___organization___updatedAt'
  | 'areas___projects___organization___publishedAt'
  | 'areas___projects___organization___projects'
  | 'areas___projects___organization___strapi_id'
  | 'areas___projects___links'
  | 'areas___projects___links___id'
  | 'areas___projects___links___children'
  | 'areas___projects___links___link'
  | 'areas___projects___links___label'
  | 'areas___projects___links___strapi_id'
  | 'areas___projects___strapi_id'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode___id'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode___children'
  | 'areas___projects___childrenStrapiProjectDescriptionTextnode___description'
  | 'areas___projects___childStrapiProjectDescriptionTextnode___id'
  | 'areas___projects___childStrapiProjectDescriptionTextnode___children'
  | 'areas___projects___childStrapiProjectDescriptionTextnode___description'
  | 'areas___strapi_id'
  | 'strapi_id';

export type Strapi_HomeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_HomeEdge>;
  nodes: Array<Strapi_Home>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_HomeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi_HomeGroupConnectionDistinctArgs = {
  field: Strapi_HomeFieldsEnum;
};


export type Strapi_HomeGroupConnectionMaxArgs = {
  field: Strapi_HomeFieldsEnum;
};


export type Strapi_HomeGroupConnectionMinArgs = {
  field: Strapi_HomeFieldsEnum;
};


export type Strapi_HomeGroupConnectionSumArgs = {
  field: Strapi_HomeFieldsEnum;
};


export type Strapi_HomeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_HomeFieldsEnum;
};

export type Strapi_HomeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  introText?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  seo?: InputMaybe<Strapi__Component_Shared_SeoFilterInput>;
  contact?: InputMaybe<Strapi__Component_Shared_ContactFilterInput>;
  profile?: InputMaybe<Strapi__Component_Shared_ProfileFilterInput>;
  areas?: InputMaybe<Strapi_AreaFilterListInput>;
  strapi_id?: InputMaybe<IntQueryOperatorInput>;
};

export type Strapi_HomeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_HomeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Strapi_AreaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_AreaEdge>;
  nodes: Array<Strapi_Area>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_AreaGroupConnection>;
};


export type Strapi_AreaConnectionDistinctArgs = {
  field: Strapi_AreaFieldsEnum;
};


export type Strapi_AreaConnectionMaxArgs = {
  field: Strapi_AreaFieldsEnum;
};


export type Strapi_AreaConnectionMinArgs = {
  field: Strapi_AreaFieldsEnum;
};


export type Strapi_AreaConnectionSumArgs = {
  field: Strapi_AreaFieldsEnum;
};


export type Strapi_AreaConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_AreaFieldsEnum;
};

export type Strapi_AreaEdge = {
  next?: Maybe<Strapi_Area>;
  node: Strapi_Area;
  previous?: Maybe<Strapi_Area>;
};

export type Strapi_AreaFieldsEnum =
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
  | 'name'
  | 'description'
  | 'color'
  | 'slug'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'tags'
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
  | 'tags___name'
  | 'tags___createdAt'
  | 'tags___updatedAt'
  | 'tags___publishedAt'
  | 'tags___projects'
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
  | 'tags___projects___title'
  | 'tags___projects___name'
  | 'tags___projects___description___medias'
  | 'tags___projects___slug'
  | 'tags___projects___createdAt'
  | 'tags___projects___updatedAt'
  | 'tags___projects___publishedAt'
  | 'tags___projects___coverImage___id'
  | 'tags___projects___coverImage___children'
  | 'tags___projects___coverImage___name'
  | 'tags___projects___coverImage___alternativeText'
  | 'tags___projects___coverImage___caption'
  | 'tags___projects___coverImage___width'
  | 'tags___projects___coverImage___height'
  | 'tags___projects___coverImage___hash'
  | 'tags___projects___coverImage___ext'
  | 'tags___projects___coverImage___mime'
  | 'tags___projects___coverImage___size'
  | 'tags___projects___coverImage___url'
  | 'tags___projects___coverImage___createdAt'
  | 'tags___projects___coverImage___updatedAt'
  | 'tags___projects___coverImage___strapi_id'
  | 'tags___projects___images'
  | 'tags___projects___images___id'
  | 'tags___projects___images___children'
  | 'tags___projects___images___name'
  | 'tags___projects___images___alternativeText'
  | 'tags___projects___images___caption'
  | 'tags___projects___images___width'
  | 'tags___projects___images___height'
  | 'tags___projects___images___hash'
  | 'tags___projects___images___ext'
  | 'tags___projects___images___mime'
  | 'tags___projects___images___size'
  | 'tags___projects___images___url'
  | 'tags___projects___images___createdAt'
  | 'tags___projects___images___updatedAt'
  | 'tags___projects___images___strapi_id'
  | 'tags___projects___tags'
  | 'tags___projects___tags___id'
  | 'tags___projects___tags___children'
  | 'tags___projects___tags___name'
  | 'tags___projects___tags___createdAt'
  | 'tags___projects___tags___updatedAt'
  | 'tags___projects___tags___publishedAt'
  | 'tags___projects___tags___projects'
  | 'tags___projects___tags___areas'
  | 'tags___projects___tags___strapi_id'
  | 'tags___projects___areas'
  | 'tags___projects___areas___id'
  | 'tags___projects___areas___children'
  | 'tags___projects___areas___name'
  | 'tags___projects___areas___description'
  | 'tags___projects___areas___color'
  | 'tags___projects___areas___slug'
  | 'tags___projects___areas___createdAt'
  | 'tags___projects___areas___updatedAt'
  | 'tags___projects___areas___publishedAt'
  | 'tags___projects___areas___tags'
  | 'tags___projects___areas___projects'
  | 'tags___projects___areas___strapi_id'
  | 'tags___projects___organization___id'
  | 'tags___projects___organization___children'
  | 'tags___projects___organization___name'
  | 'tags___projects___organization___link'
  | 'tags___projects___organization___createdAt'
  | 'tags___projects___organization___updatedAt'
  | 'tags___projects___organization___publishedAt'
  | 'tags___projects___organization___projects'
  | 'tags___projects___organization___strapi_id'
  | 'tags___projects___links'
  | 'tags___projects___links___id'
  | 'tags___projects___links___children'
  | 'tags___projects___links___link'
  | 'tags___projects___links___label'
  | 'tags___projects___links___strapi_id'
  | 'tags___projects___strapi_id'
  | 'tags___projects___childrenStrapiProjectDescriptionTextnode'
  | 'tags___projects___childrenStrapiProjectDescriptionTextnode___id'
  | 'tags___projects___childrenStrapiProjectDescriptionTextnode___children'
  | 'tags___projects___childrenStrapiProjectDescriptionTextnode___description'
  | 'tags___projects___childStrapiProjectDescriptionTextnode___id'
  | 'tags___projects___childStrapiProjectDescriptionTextnode___children'
  | 'tags___projects___childStrapiProjectDescriptionTextnode___description'
  | 'tags___areas'
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
  | 'tags___areas___name'
  | 'tags___areas___description'
  | 'tags___areas___color'
  | 'tags___areas___slug'
  | 'tags___areas___createdAt'
  | 'tags___areas___updatedAt'
  | 'tags___areas___publishedAt'
  | 'tags___areas___tags'
  | 'tags___areas___tags___id'
  | 'tags___areas___tags___children'
  | 'tags___areas___tags___name'
  | 'tags___areas___tags___createdAt'
  | 'tags___areas___tags___updatedAt'
  | 'tags___areas___tags___publishedAt'
  | 'tags___areas___tags___projects'
  | 'tags___areas___tags___areas'
  | 'tags___areas___tags___strapi_id'
  | 'tags___areas___projects'
  | 'tags___areas___projects___id'
  | 'tags___areas___projects___children'
  | 'tags___areas___projects___title'
  | 'tags___areas___projects___name'
  | 'tags___areas___projects___slug'
  | 'tags___areas___projects___createdAt'
  | 'tags___areas___projects___updatedAt'
  | 'tags___areas___projects___publishedAt'
  | 'tags___areas___projects___images'
  | 'tags___areas___projects___tags'
  | 'tags___areas___projects___areas'
  | 'tags___areas___projects___links'
  | 'tags___areas___projects___strapi_id'
  | 'tags___areas___projects___childrenStrapiProjectDescriptionTextnode'
  | 'tags___areas___strapi_id'
  | 'tags___strapi_id'
  | 'projects'
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
  | 'projects___title'
  | 'projects___name'
  | 'projects___description___medias'
  | 'projects___description___medias___alternativeText'
  | 'projects___description___medias___url'
  | 'projects___description___medias___src'
  | 'projects___description___data___id'
  | 'projects___description___data___children'
  | 'projects___description___data___description'
  | 'projects___slug'
  | 'projects___createdAt'
  | 'projects___updatedAt'
  | 'projects___publishedAt'
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
  | 'projects___coverImage___name'
  | 'projects___coverImage___alternativeText'
  | 'projects___coverImage___caption'
  | 'projects___coverImage___width'
  | 'projects___coverImage___height'
  | 'projects___coverImage___hash'
  | 'projects___coverImage___ext'
  | 'projects___coverImage___mime'
  | 'projects___coverImage___size'
  | 'projects___coverImage___url'
  | 'projects___coverImage___createdAt'
  | 'projects___coverImage___updatedAt'
  | 'projects___coverImage___localFile___sourceInstanceName'
  | 'projects___coverImage___localFile___absolutePath'
  | 'projects___coverImage___localFile___relativePath'
  | 'projects___coverImage___localFile___extension'
  | 'projects___coverImage___localFile___size'
  | 'projects___coverImage___localFile___prettySize'
  | 'projects___coverImage___localFile___modifiedTime'
  | 'projects___coverImage___localFile___accessTime'
  | 'projects___coverImage___localFile___changeTime'
  | 'projects___coverImage___localFile___birthTime'
  | 'projects___coverImage___localFile___root'
  | 'projects___coverImage___localFile___dir'
  | 'projects___coverImage___localFile___base'
  | 'projects___coverImage___localFile___ext'
  | 'projects___coverImage___localFile___name'
  | 'projects___coverImage___localFile___relativeDirectory'
  | 'projects___coverImage___localFile___dev'
  | 'projects___coverImage___localFile___mode'
  | 'projects___coverImage___localFile___nlink'
  | 'projects___coverImage___localFile___uid'
  | 'projects___coverImage___localFile___gid'
  | 'projects___coverImage___localFile___rdev'
  | 'projects___coverImage___localFile___ino'
  | 'projects___coverImage___localFile___atimeMs'
  | 'projects___coverImage___localFile___mtimeMs'
  | 'projects___coverImage___localFile___ctimeMs'
  | 'projects___coverImage___localFile___atime'
  | 'projects___coverImage___localFile___mtime'
  | 'projects___coverImage___localFile___ctime'
  | 'projects___coverImage___localFile___birthtime'
  | 'projects___coverImage___localFile___birthtimeMs'
  | 'projects___coverImage___localFile___blksize'
  | 'projects___coverImage___localFile___blocks'
  | 'projects___coverImage___localFile___url'
  | 'projects___coverImage___localFile___publicURL'
  | 'projects___coverImage___localFile___childrenImageSharp'
  | 'projects___coverImage___localFile___id'
  | 'projects___coverImage___localFile___children'
  | 'projects___coverImage___strapi_id'
  | 'projects___images'
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
  | 'projects___images___name'
  | 'projects___images___alternativeText'
  | 'projects___images___caption'
  | 'projects___images___width'
  | 'projects___images___height'
  | 'projects___images___hash'
  | 'projects___images___ext'
  | 'projects___images___mime'
  | 'projects___images___size'
  | 'projects___images___url'
  | 'projects___images___createdAt'
  | 'projects___images___updatedAt'
  | 'projects___images___localFile___sourceInstanceName'
  | 'projects___images___localFile___absolutePath'
  | 'projects___images___localFile___relativePath'
  | 'projects___images___localFile___extension'
  | 'projects___images___localFile___size'
  | 'projects___images___localFile___prettySize'
  | 'projects___images___localFile___modifiedTime'
  | 'projects___images___localFile___accessTime'
  | 'projects___images___localFile___changeTime'
  | 'projects___images___localFile___birthTime'
  | 'projects___images___localFile___root'
  | 'projects___images___localFile___dir'
  | 'projects___images___localFile___base'
  | 'projects___images___localFile___ext'
  | 'projects___images___localFile___name'
  | 'projects___images___localFile___relativeDirectory'
  | 'projects___images___localFile___dev'
  | 'projects___images___localFile___mode'
  | 'projects___images___localFile___nlink'
  | 'projects___images___localFile___uid'
  | 'projects___images___localFile___gid'
  | 'projects___images___localFile___rdev'
  | 'projects___images___localFile___ino'
  | 'projects___images___localFile___atimeMs'
  | 'projects___images___localFile___mtimeMs'
  | 'projects___images___localFile___ctimeMs'
  | 'projects___images___localFile___atime'
  | 'projects___images___localFile___mtime'
  | 'projects___images___localFile___ctime'
  | 'projects___images___localFile___birthtime'
  | 'projects___images___localFile___birthtimeMs'
  | 'projects___images___localFile___blksize'
  | 'projects___images___localFile___blocks'
  | 'projects___images___localFile___url'
  | 'projects___images___localFile___publicURL'
  | 'projects___images___localFile___childrenImageSharp'
  | 'projects___images___localFile___id'
  | 'projects___images___localFile___children'
  | 'projects___images___strapi_id'
  | 'projects___tags'
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
  | 'projects___tags___name'
  | 'projects___tags___createdAt'
  | 'projects___tags___updatedAt'
  | 'projects___tags___publishedAt'
  | 'projects___tags___projects'
  | 'projects___tags___projects___id'
  | 'projects___tags___projects___children'
  | 'projects___tags___projects___title'
  | 'projects___tags___projects___name'
  | 'projects___tags___projects___slug'
  | 'projects___tags___projects___createdAt'
  | 'projects___tags___projects___updatedAt'
  | 'projects___tags___projects___publishedAt'
  | 'projects___tags___projects___images'
  | 'projects___tags___projects___tags'
  | 'projects___tags___projects___areas'
  | 'projects___tags___projects___links'
  | 'projects___tags___projects___strapi_id'
  | 'projects___tags___projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___tags___areas'
  | 'projects___tags___areas___id'
  | 'projects___tags___areas___children'
  | 'projects___tags___areas___name'
  | 'projects___tags___areas___description'
  | 'projects___tags___areas___color'
  | 'projects___tags___areas___slug'
  | 'projects___tags___areas___createdAt'
  | 'projects___tags___areas___updatedAt'
  | 'projects___tags___areas___publishedAt'
  | 'projects___tags___areas___tags'
  | 'projects___tags___areas___projects'
  | 'projects___tags___areas___strapi_id'
  | 'projects___tags___strapi_id'
  | 'projects___areas'
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
  | 'projects___areas___name'
  | 'projects___areas___description'
  | 'projects___areas___color'
  | 'projects___areas___slug'
  | 'projects___areas___createdAt'
  | 'projects___areas___updatedAt'
  | 'projects___areas___publishedAt'
  | 'projects___areas___tags'
  | 'projects___areas___tags___id'
  | 'projects___areas___tags___children'
  | 'projects___areas___tags___name'
  | 'projects___areas___tags___createdAt'
  | 'projects___areas___tags___updatedAt'
  | 'projects___areas___tags___publishedAt'
  | 'projects___areas___tags___projects'
  | 'projects___areas___tags___areas'
  | 'projects___areas___tags___strapi_id'
  | 'projects___areas___projects'
  | 'projects___areas___projects___id'
  | 'projects___areas___projects___children'
  | 'projects___areas___projects___title'
  | 'projects___areas___projects___name'
  | 'projects___areas___projects___slug'
  | 'projects___areas___projects___createdAt'
  | 'projects___areas___projects___updatedAt'
  | 'projects___areas___projects___publishedAt'
  | 'projects___areas___projects___images'
  | 'projects___areas___projects___tags'
  | 'projects___areas___projects___areas'
  | 'projects___areas___projects___links'
  | 'projects___areas___projects___strapi_id'
  | 'projects___areas___projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___areas___strapi_id'
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
  | 'projects___organization___name'
  | 'projects___organization___link'
  | 'projects___organization___createdAt'
  | 'projects___organization___updatedAt'
  | 'projects___organization___publishedAt'
  | 'projects___organization___projects'
  | 'projects___organization___projects___id'
  | 'projects___organization___projects___children'
  | 'projects___organization___projects___title'
  | 'projects___organization___projects___name'
  | 'projects___organization___projects___slug'
  | 'projects___organization___projects___createdAt'
  | 'projects___organization___projects___updatedAt'
  | 'projects___organization___projects___publishedAt'
  | 'projects___organization___projects___images'
  | 'projects___organization___projects___tags'
  | 'projects___organization___projects___areas'
  | 'projects___organization___projects___links'
  | 'projects___organization___projects___strapi_id'
  | 'projects___organization___projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___organization___strapi_id'
  | 'projects___links'
  | 'projects___links___id'
  | 'projects___links___parent___id'
  | 'projects___links___parent___children'
  | 'projects___links___children'
  | 'projects___links___children___id'
  | 'projects___links___children___children'
  | 'projects___links___internal___content'
  | 'projects___links___internal___contentDigest'
  | 'projects___links___internal___description'
  | 'projects___links___internal___fieldOwners'
  | 'projects___links___internal___ignoreType'
  | 'projects___links___internal___mediaType'
  | 'projects___links___internal___owner'
  | 'projects___links___internal___type'
  | 'projects___links___link'
  | 'projects___links___label'
  | 'projects___links___strapi_id'
  | 'projects___strapi_id'
  | 'projects___childrenStrapiProjectDescriptionTextnode'
  | 'projects___childrenStrapiProjectDescriptionTextnode___id'
  | 'projects___childrenStrapiProjectDescriptionTextnode___parent___id'
  | 'projects___childrenStrapiProjectDescriptionTextnode___parent___children'
  | 'projects___childrenStrapiProjectDescriptionTextnode___children'
  | 'projects___childrenStrapiProjectDescriptionTextnode___children___id'
  | 'projects___childrenStrapiProjectDescriptionTextnode___children___children'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___content'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___contentDigest'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___description'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___fieldOwners'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___ignoreType'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___mediaType'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___owner'
  | 'projects___childrenStrapiProjectDescriptionTextnode___internal___type'
  | 'projects___childrenStrapiProjectDescriptionTextnode___description'
  | 'projects___childStrapiProjectDescriptionTextnode___id'
  | 'projects___childStrapiProjectDescriptionTextnode___parent___id'
  | 'projects___childStrapiProjectDescriptionTextnode___parent___children'
  | 'projects___childStrapiProjectDescriptionTextnode___children'
  | 'projects___childStrapiProjectDescriptionTextnode___children___id'
  | 'projects___childStrapiProjectDescriptionTextnode___children___children'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___content'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___contentDigest'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___description'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___fieldOwners'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___ignoreType'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___mediaType'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___owner'
  | 'projects___childStrapiProjectDescriptionTextnode___internal___type'
  | 'projects___childStrapiProjectDescriptionTextnode___description'
  | 'strapi_id';

export type Strapi_AreaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<Strapi_AreaEdge>;
  nodes: Array<Strapi_Area>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<Strapi_AreaGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type Strapi_AreaGroupConnectionDistinctArgs = {
  field: Strapi_AreaFieldsEnum;
};


export type Strapi_AreaGroupConnectionMaxArgs = {
  field: Strapi_AreaFieldsEnum;
};


export type Strapi_AreaGroupConnectionMinArgs = {
  field: Strapi_AreaFieldsEnum;
};


export type Strapi_AreaGroupConnectionSumArgs = {
  field: Strapi_AreaFieldsEnum;
};


export type Strapi_AreaGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: Strapi_AreaFieldsEnum;
};

export type Strapi_AreaSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Strapi_AreaFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type NavDataQueryVariables = Exact<{ [key: string]: never; }>;


export type NavDataQuery = { site?: { siteMetadata?: { siteURL?: string | null, title?: string | null } | null } | null };

export type ExternalLinkFragment = { id: string, link?: string | null, label?: string | null };

export type ImageBaseFragment = { id: string, alternativeText?: string | null, caption?: string | null };

export type AreaBaseFragment = { id: string, slug?: string | null, name?: string | null, description?: string | null, color?: string | null };

export type AreaDetailFragment = { id: string, slug?: string | null, name?: string | null, description?: string | null, color?: string | null, projects?: Array<{ id: string, images?: Array<{ id: string, alternativeText?: string | null, caption?: string | null, localFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null> | null } | null> | null, tags?: Array<{ id: string, name?: string | null } | null> | null };

export type OrganizationFragment = { id: string, name?: string | null, link?: string | null };

export type ProjectDetailFragment = { id: string, title?: string | null, name?: string | null, slug?: string | null, description?: { data?: { description?: string | null } | null } | null, organization?: { id: string, name?: string | null, link?: string | null } | null, coverImage?: { id: string, alternativeText?: string | null, caption?: string | null, localFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, images?: Array<{ id: string, alternativeText?: string | null, caption?: string | null, localFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null> | null, tags?: Array<{ id: string, name?: string | null } | null> | null, areas?: Array<{ id: string, slug?: string | null, name?: string | null, description?: string | null, color?: string | null } | null> | null, links?: Array<{ id: string, link?: string | null, label?: string | null } | null> | null };

export type ProfileFragment = { picture?: { id: string, alternativeText?: string | null, caption?: string | null, localFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, qualities?: Array<{ text?: string | null } | null> | null };

export type ContactFragment = { text?: string | null, button?: { id: string, link?: string | null, label?: string | null } | null };

export type HomeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeDataQuery = { strapiHome?: { title?: string | null, introText?: string | null, profile?: { picture?: { id: string, alternativeText?: string | null, caption?: string | null, localFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, qualities?: Array<{ text?: string | null } | null> | null } | null, contact?: { text?: string | null, button?: { id: string, link?: string | null, label?: string | null } | null } | null, seo?: { metaTitle?: string | null } | null, areas?: Array<{ id: string, name?: string | null, description?: string | null } | null> | null } | null, allStrapiArea: { edges: Array<{ node: { id: string, slug?: string | null, name?: string | null, description?: string | null, color?: string | null, projects?: Array<{ id: string, title?: string | null, slug?: string | null, images?: Array<{ id: string, alternativeText?: string | null, caption?: string | null, localFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null> | null } | null> | null, tags?: Array<{ id: string, name?: string | null } | null> | null } }> } };

export type ProjectsPageDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsPageDataQuery = { allStrapiProject: { totalCount: number, edges: Array<{ node: { id: string, title?: string | null, name?: string | null, slug?: string | null, description?: { data?: { description?: string | null } | null } | null, organization?: { id: string, name?: string | null, link?: string | null } | null, coverImage?: { id: string, alternativeText?: string | null, caption?: string | null, localFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null, images?: Array<{ id: string, alternativeText?: string | null, caption?: string | null, localFile?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null> | null, tags?: Array<{ id: string, name?: string | null } | null> | null, areas?: Array<{ id: string, slug?: string | null, name?: string | null, description?: string | null, color?: string | null } | null> | null, links?: Array<{ id: string, link?: string | null, label?: string | null } | null> | null } }> }, allStrapiArea: { edges: Array<{ node: { id: string, slug?: string | null, name?: string | null, description?: string | null, color?: string | null } }> } };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
