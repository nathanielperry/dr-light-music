import * as _ from 'lodash';

async function getWordsList() {
    const response = await fetch('words.json');
    return await response.json();
}

async function getWord(options = {}) {
    _.defaults(options, {
        usePrefix: true,
        useSuffix: false,
        useDashes: true,
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
    getWord,
    getLine,
    getLineWithWord,
}