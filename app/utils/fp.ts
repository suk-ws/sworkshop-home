/**
 * Instant compute a function and return the result.
 * 
 * The usage is like:
 * ```
 * const expr = () => { for (i = 0; i < 10; i++) { if (i > 5) return i } }
 * const some_val = did(expr)
 * ```
 * or most commonly usage is like:
 * ```
 * const some_val = did(() => { for (i = 0; i < 10; i++) { if (i > 5) return i } })
 * ```
 * 
 * So, it gives a way to do a complex compute within one scope and get its result
 * like most of the fp languages can do.
 * 
 * It is actually equivalent to
 * ```
 * const some_val = (() => { for (i = 0; i < 10; i++) { if (i > 5) return i } })()
 * ```
 * just more readable...maybe.
 * 
 * It also have a alias named {@link _$}. use it as you like.
 */
export function did<T> (expr: () => T): T {
	return expr()
}

/**
 * The alias of {@link did}
 */
export const _$ = did
