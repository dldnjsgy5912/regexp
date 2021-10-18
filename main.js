const str = `
010-1234-5678
dldnjsgy5912@naver.com
https://fastcampus.co.kr/courses/203720/clips/
the quick brown
abbcccdddd
`;

//const regexp = /fox/gi;

//console.log(regexp.test(str));
//console.log(str.match(regexp));
//console.log(str.replace(regexp, 'hi'));

//console.log(str.match(/h..p/g)); //http
//console.log(str.match(/fox|brown/g)); //동시찾기
//console.log(str.match(/https?/gi));

//console.log(str.match(/\b\w{2,3}\b/g));//특수기호 다음부터 3글자
//console.log(str.match(/[0-9]{1,}/g));

//console.log(str.match(/\bf\w{1,}/g)); //소문자f로 시작하는 모든 영단어를 찾기
//console.log(str.match(/\d{1,}/g));
//console.log(str.match(/\s/g));

console.log(str.match(/.{1,}(?=@)/g)); //아이디 찾기
console.log(str.match(/(?<=@).{1,}/g)); //메일 찾기
//공백 지우기
const a = `   hello world`;
console.log(a.replace(/\s/g, ''));
