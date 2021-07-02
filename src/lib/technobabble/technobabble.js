import * as _ from 'lodash';
import { capitalize } from 'lodash';

let words;

async function getWordsList() {
    let response;
    if (!words) {
        response = await fetch('words.json');
        words = await response.json();
    }

    return words;
}

async function getVerb(options = {}) {
    _.defaults(options, {
        capitalize: true,
    });

    const words = await getWordsList();
    let verb = words.verb[_.random(words.verb.length - 1)];
    if (capitalize) {
        verb = verb[0].toUpperCase() + verb.slice(1);
    }

    return verb;
}

async function getWord(options = {}) {
    _.defaults(options, {
        usePrefix: true,
        useSuffix: false,
        useDashes: false,
    });

    const words = await getWordsList();
    const prefix = options.usePrefix ? words.prefix[_.random(words.prefix.length)] : '';
    const suffix = options.useSuffix ? words.suffix[_.random(words.suffix.length)] : '';
    const base = words.base[_.random(words.base.length)];

    return [prefix, base, suffix].join(options.useDashes ? '-' : '');
}

function getLine(options) {
    _.defaults(options, {
        length: 30,
    });

    return _.pad('', options.length, '-');
}

async function getLineWithWord(options = {}) {
    _.defaults(options, {
        length: 30,
        position: 'center', //or start or end
        lineChar: '-',
    });

    const word = await getWord(options);
    const padFns = {
        center: _.pad,
        end: _.padStart,
        start: _.padEnd
    }

    return padFns[options.position](word, options.length, options.lineChar);
}

export default {
    getVerb,
    getWord,
    getLine,
    getLineWithWord,
}