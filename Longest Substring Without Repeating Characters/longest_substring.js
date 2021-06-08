function lengthOfLongestSubstring(s) {
    var curr_length = 0;
    var max_length = 0;
    var start = 0;
    var curr_chars = {};
    for (var i = 0; i < s.length; i++) {
        if (s[i] in curr_chars) {
            if (curr_chars[s[i]] >= start) {
                curr_length = i - curr_chars[s[i]] - 1;
                start = curr_chars[s[i]] + 1;
            }
        }
        curr_length++;
        curr_chars[s[i]] = i;
        max_length = curr_length > max_length ? curr_length : max_length;
    }
    return max_length;
}
function main() {
    console.log(lengthOfLongestSubstring("dvdf"));
}
main();
