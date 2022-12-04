/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    hashmap = {} // c in s : c in t
    for (let i = 0; i < s.length; i++) {
        if (hashmap[s[i]] !== undefined && hashmap[s[i]] !== t[i]) {
            return false;
        }
        hashmap[s[i]] = t[i];
    }
    values = Object.values(hashmap);
    dups = values.filter((item, index) => values.indexOf(item) !== index);
    if (dups.length > 0) {
        return false;
    }
    return true;
};