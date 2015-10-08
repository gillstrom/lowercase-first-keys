'use strict';
import test from 'ava';
import fn from './';

test('lowercase first letter', t => {
	t.same(fn({TestKey: 'foo', AnotherKey: 'bar', thirdKey: 'baz'}), {testKey: 'foo', anotherKey: 'bar', thirdKey: 'baz'});
	t.end();
});
