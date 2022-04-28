import { PremiersCaracteresPipe } from './etat-serveurs/premiers-caracteres.pipe';

describe('PremiersCaracteresPipe', () => {
  it('create an instance', () => {
    const pipe = new PremiersCaracteresPipe();
    expect(pipe).toBeTruthy();
  });
});
