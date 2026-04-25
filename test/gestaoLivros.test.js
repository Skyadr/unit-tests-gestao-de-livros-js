import { buscarTituloDoLivroPorID } from '../src/gestaoLivros.js'
import assert from 'node:assert';

describe('Testando função buscarTituloDoLivroPorID', function() {
    it('Retorna o título correto para ID válido', function() {
        const resultado = buscarTituloDoLivroPorID(1);
        assert.strictEqual(resultado, 'Se Houver Amanhã');
    });

    it('Retorna mensagem para ID não encontrado', function() {
        const resultado = buscarTituloDoLivroPorID(99);
        assert.strictEqual(resultado, 'ID não encontrado.');
    });

    it('Lança erro para ID menor que 1', function() {
        assert.throws(
            function() { buscarTituloDoLivroPorID(0); },
            { message: 'O ID precisa ser informado ou maior que 0' }
        );
    });

    it('Lança erro para ID igual a nulo', function() {
        assert.throws(
            function() { buscarTituloDoLivroPorID(null); },
            { message: 'O ID precisa ser informado ou maior que 0' }
        );
    });

    it('Lança erro para ID não informado', function() {
        assert.throws(
            function() { buscarTituloDoLivroPorID(undefined); },
            { message: 'O ID precisa ser informado ou maior que 0' }
        );
    });
});
