module.exports = function (client, stanzas) {

    var types = stanzas.utils;

    var Foo = stanzas.define({
        name: 'mystanza',
        element: 'register',
        namespace: 'https://eazespot.com/',
    });

    var Foo2 = stanzas.define({
        name: 'mystanza2',
        element: 'rosterCount',
        fields: {
            value: types.text()
        }
    });

    stanzas.withIq(function (iq) {
        stanzas.extend(iq, Foo);
    });

    stanzas.extend(Foo, Foo2);

    client.sendMyStanza = function (jid) {
        client.sendIq({
            to: jid,
            type: 'set',
            mystanza: {
                mystanza2: {
                    value: 'sahil_1_5@dev.chat.eazespot.com'
                }
            }
        });
    };

    client.on('message', function (msg) {
        if (msg.mystanza) {
            client.emit('roosterCount', msg);
        }
    });
};
