/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export interface Testimonial {
    comment: string,
    authorName: string, 
    company: string,
    avatar: string,
}
