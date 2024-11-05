# Interface: FetchApiRequest\<K, B\>

## Type Parameters

• **K** = `unknown`

• **B** = `unknown`

## Properties

### body?

> `optional` **body**: `B`

#### Defined in

[packages/fetch/src/fetch.ts:18](https://github.com/mbti-nf-team/frontend-libraries/blob/3916286534b50dbdcab9c2145adbaa464419b886/packages/fetch/src/fetch.ts#L18)

***

### config?

> `optional` **config**: `Omit`\<`RequestInit`, `"method"` \| `"body"`\>

#### Defined in

[packages/fetch/src/fetch.ts:20](https://github.com/mbti-nf-team/frontend-libraries/blob/3916286534b50dbdcab9c2145adbaa464419b886/packages/fetch/src/fetch.ts#L20)

***

### method?

> `optional` **method**: [`Method`](../type-aliases/Method.md)

#### Defined in

[packages/fetch/src/fetch.ts:17](https://github.com/mbti-nf-team/frontend-libraries/blob/3916286534b50dbdcab9c2145adbaa464419b886/packages/fetch/src/fetch.ts#L17)

***

### params?

> `optional` **params**: `K`

#### Defined in

[packages/fetch/src/fetch.ts:16](https://github.com/mbti-nf-team/frontend-libraries/blob/3916286534b50dbdcab9c2145adbaa464419b886/packages/fetch/src/fetch.ts#L16)

***

### timeout?

> `optional` **timeout**: `number`

#### Defined in

[packages/fetch/src/fetch.ts:19](https://github.com/mbti-nf-team/frontend-libraries/blob/3916286534b50dbdcab9c2145adbaa464419b886/packages/fetch/src/fetch.ts#L19)

***

### url

> **url**: `string`

#### Defined in

[packages/fetch/src/fetch.ts:15](https://github.com/mbti-nf-team/frontend-libraries/blob/3916286534b50dbdcab9c2145adbaa464419b886/packages/fetch/src/fetch.ts#L15)
