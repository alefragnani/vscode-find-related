'use strict';
import { union as _union } from 'lodash-es';

export namespace Arrays {
    export function flatten<T>(array: (T | T[])[]): T[] {
        return array.reduce((acc: T[], val: T | T[]) => acc.concat(Array.isArray(val) ? flatten(val) : val), []) as T[];
    }

    export function union<T>(...arrays: T[][]): T[] {
        return _union<T>(...arrays);
    }
}
