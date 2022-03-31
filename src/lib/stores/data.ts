import { writable } from 'svelte/store';

const socials = writable([]);
const projects = writable([]);
const experience = writable([]);
const skills = writable([]);

export { socials, projects, experience, skills };
