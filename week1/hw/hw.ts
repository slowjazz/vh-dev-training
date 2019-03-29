/* eslint-disable */ // just to prevent it from annoying us forever
import fetch from 'node-fetch';

// to call this function, you'll need to do two things
// 1st, the function that is called in must have the keyword "async" before the parameters
// 2nd when you call it, you must preface it with "await"
// like in the below example

// all these parantheses and braces creates and instantly calls a function.
// This is known as an Instantly Invoked Function Expression (IIFE).
// It has a lot of uses but in this case, since await can only be used in async functions, it's needed

// write your homework here
console.log(console);

// put all this in your "objectively" function after you make it
// const whatAmI = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' };

const num = 3;

const objectively = () => {
	const getdata = (n: number, url: string) =>
		new Promise((res, rej) => {
			fetch(url)
				.then(data => data.json())
				.then(json => {
					// the json variable here is just the stuff you see in the browser
					res(
						json.sort(function (a: any, b: any) {
							return b.unique - a.unique || b.score - a.score;
						})[n - 1]
					);
				})
				.catch(err => rej(err));
		});

	(async () => {
		const data = await getdata(num, 'https://spot.benc.me/?time=1549939921');
		console.log(data);
	})();
};
objectively();

// put this stuff in your "awry" function after you make it
const docTester = [];
// fill docTester with 1000 random integers between 0 and 99
for (let i = 0; i < 1000; i++) docTester[i] = Math.floor(Math.random() * 100);
// console.log(docTester); // uncomment this to see the array logged

const docTesterIndex: any[] = [];
docTester.forEach((value, index, arr) => (docTesterIndex[index] = value + index));

console.log(docTesterIndex.reduce((acc, el) => (acc += el), 0));

function targetSpot(obj: any, n: number) {
	return obj.spotted >= n || obj.spotted === 0;
}

const awry = () => {
	// like in the below example
	const getdatafiltered = (n: number, url: string) =>
		new Promise((res, rej) => {
			fetch(url)
				.then(data => data.json())
				.then(json => {
					// the json variable here is just the stuff you see in the browser
					res(
						json
							.filter((person: any) => targetSpot(person, n))
							.sort(function (a: any, b: any) {
								return b.unique - a.unique || b.score - a.score;
							})[n - 1]
					);
				})
				.catch(err => rej(err));
		});

	(async () => {
		const data = await getdatafiltered(num, 'https://spot.benc.me/?time=1549939921');
		console.log(data);
	})();
};
awry();