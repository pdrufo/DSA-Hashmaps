const HashMap = require("./HashMap");



function main() {

    let lotr = new HashMap;
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;



    lotr.set('Hobbit', 'Bilbo');
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");

    // console.log(lotr.get("Maiar"));
    // console.log(lotr.get("Hobbit"));

    //maiar value pair is Sauron because necromancer overwrites it, key must be unique
    //24 is the new capacity, once we pass 8 we multiply by size_ratio and new capacity is 24

    // const WhatDoesThisDo = function () {

    //     let str1 = 'Hello World.';
    //     let str2 = 'Hello World.';

    //     //two new hashmaps
    //     let map1 = new HashMap();
    //     let map2 = new HashMap();

    //     //on map1(hashmap) we set the key 'hello world' to the value 10;
    //     //on map2 we set the key 'hello world' to the value 20;
    //     map1.set(str1, 10);
    //     map1.set(str2, 20);

    //     // str3 = hello world;
    //     //str4 = hello world;
    //     let str3 = str1;
    //     let str4 = str2;

    //     //second new hash they set hello world with value 20;
    //     // hellow world with value ten line 53
    //     map2.set(str3, 20);
    //     map2.set(str4, 10);

    //     console.log(map1.get(str1));
    //     //10;
    //     console.log(map2.get(str3));
    //     //20;
    // }

    const WhatDoesThisDo = function () {
        let str1 = 'Hello.';
        let str2 = 'Hello World.';
        let map1 = new HashMap();
        map1.set(str1, 10);
        map1.set(str2, 20);
        let map2 = new HashMap();
        let str3 = str1;
        let str4 = str2;
        map2.set(str3, 20);
        map2.set(str4, 10);

        console.log(map1.get(str1));
        console.log(map2.get(str3));
    }

    WhatDoesThisDo();

    // Remove Duplicates

    function removeDuplicates() {
        const string = 'google all that you think can think of';
        const string2 = 'google';
        let newStr = '';
        let seen = {};

        //loop through
        // check if the key exists in seen;
        // if it doesnt exist we add it with true or 1;
        // if it does exist;

        for (let i = 0; i < string2.length; i++) {

            if (seen[string2[i]]) {
                continue;
            } else {
                seen[string2[i]] = true;
            }
        }
        console.log(Object.keys(seen).join(''));
    }

    removeDuplicates();

    function isPalindrome(str1) {
        let seen = {};

        for (let i = 0; i < str1.length; i++) {
            if (seen[str1[i]]) {
                seen[str1[1]] += 1;
            } else {
                seen[str1[i]] = 1;
            }
        }
        console.log(seen);
    }

    isPalindrome('acecarr');


    const groupAnagrams = (strArr) => {
        const anagramMap = new Map()
        strArr.forEach((word) => {
            let sorted = alphabetize(word)
            if (anagramMap.has(sorted)) {
                anagramMap.get(sorted).push(word)
            }
            else {
                anagramMap.set(sorted, [word])
            }
        })
        return [...anagramMap.values()]


    }
    const alphabetize = word => {
        let alphebtized = word.split('').sort().join('')
        return alphebtized
    }

    console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))








    return 1;
}


console.log(main());