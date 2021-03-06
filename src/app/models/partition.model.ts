import { Commentaire } from './commentaire.model';

export interface Partition {
  author: string;
  title: string;
  difficulty: string;
  linkPart: string;
  instrument: [{nom: string}];
  readonly comments: [Commentaire];
}
