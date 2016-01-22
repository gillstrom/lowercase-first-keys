'use strict';
import test from 'ava';
import m from './';

test('lowercase first letter', t => {
	t.same(m({
		TestKey: 'foo',
		AnotherKey: 'bar',
		thirdKey: 'baz'
	}), {
		testKey: 'foo',
		anotherKey: 'bar',
		thirdKey: 'baz'
	});
});
