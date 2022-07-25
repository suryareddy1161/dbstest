let s = "abcd"
let t = "abcde"

for (let i = 0; i < t.length; i++) {
    if (!s.includes(t[i])) {
        console.log(t[i])
    }
}