# Class: FetchError

## Extends

- `Error`

## Constructors

### new FetchError()

> **new FetchError**(`status`, `message`): [`FetchError`](FetchError.md)

#### Parameters

• **status**: `number`

• **message**: `string`

#### Returns

[`FetchError`](FetchError.md)

#### Overrides

`Error.constructor`

#### Defined in

[packages/fetch/src/fetch.ts:6](https://github.com/mbti-nf-team/frontend-libraries/blob/08b9d43288f72c3d793bb8f598c64f689d769c2e/packages/fetch/src/fetch.ts#L6)

## Properties

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1068

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1067

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1069

***

### status

> **status**: `number`

#### Defined in

[packages/fetch/src/fetch.ts:6](https://github.com/mbti-nf-team/frontend-libraries/blob/08b9d43288f72c3d793bb8f598c64f689d769c2e/packages/fetch/src/fetch.ts#L6)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:11

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:4
