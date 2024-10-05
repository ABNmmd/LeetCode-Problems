/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let s1map = new Map();

    // Populate the map with the character counts from s1
    for (let i = 0; i < s1.length; i++) {
        s1map.set(s1[i], (s1map.get(s1[i]) || 0) + 1);
    }

    // Loop over the possible starting points in s2
    for (let i = 0; i <= s2.length - s1.length; i++) {
        let s2map = new Map();

        // For each starting point, build the character count map for the current window
        for (let j = 0; j < s1.length; j++) {
            s2map.set(s2[i + j], (s2map.get(s2[i + j]) || 0) + 1);
        }

        // Check if the two maps match
        if (matches(s1map, s2map)) return true;
    }
    
    return false;

    // Helper function to compare two maps
    function matches(map1, map2) {
        if (map1.size !== map2.size) return false;
        for (let [key, value] of map1) {
            if (map2.get(key) !== value) return false;
        }
        return true;
    }
};