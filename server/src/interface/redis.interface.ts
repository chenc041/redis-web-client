import { RedisKey, RedisValue } from 'ioredis';

/** 类型文件 **/
export interface SetValueByKey {
	key: RedisKey;
	value: RedisValue;
	expiryMode?: any;
	time?: any;
	setMode?: any;
}

export class ExpireOfKey {
	key: RedisKey;
	expireTime: number;
}

export class RenameKey {
	key: RedisKey;
	newKey: RedisKey;
}

export interface Response<T> {
	data: T;
	statusCode: number;
}
