/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let ptr = 0;
    for (let i = 0 ; i < t.length; i++) {
        if (t[i] == s[ptr]) {
            ptr++;
        }
    }
    if (ptr == s.length) {
        return true;
    }
    return false;
};