import type { ClassDetail } from './schema';
import { homebrewClassDetails } from '../homebrew';
import { officialEditorClassDetails } from '../official';
export type { ClassDetail } from './schema';
import { classDetail as ranger } from './ranger';
import { classDetail as cavaleiro } from './cavaleiro';
import { classDetail as monge } from './monge';
import { classDetail as guerreiro } from './guerreiro';
import { classDetail as samurai } from './samurai';
import { classDetail as druida } from './druida';
import { classDetail as metamorfo } from './metamorfo';
import { classDetail as senhorDasFeras } from './senhor-das-feras';
import { classDetail as clerigo } from './clerigo';
import { classDetail as cruzado } from './cruzado';
import { classDetail as usurpador } from './usurpador';
import { classDetail as bardo } from './bardo';
import { classDetail as barbaro } from './barbaro';
import { classDetail as ladino } from './ladino';
import { classDetail as ninja } from './ninja';
import { classDetail as cavaleiroArcano } from './cavaleiro-arcano';
import { classDetail as necromante } from './necromante';
import { classDetail as cronomante } from './cronomante';
import { classDetail as geomante } from './geomante-naturalista';
import { classDetail as numeromante } from './numeromante';
import { classDetail as paladino } from './paladino';
import { classDetail as artifice } from './artifice';

import { classDetail as algozDaTormenta } from './algoz-da-tormenta';

import { classDetail as cavaleiroDaMorte } from './cavaleiro-da-morte';

import { classDetail as medicoDeSalistick } from './medico-de-salistick';

import { classDetail as alquimistaDrogadora } from './alquimista-drogadora';

import { classDetail as bruxaDaTormenta } from './bruxa-da-tormenta';

import { classDetail as mestreDasBonecas } from './mestre-das-bonecas';

import { classDetail as cavaleiroDoCorvo } from './cavaleiro-do-corvo';

export const classDetails: ClassDetail[] = [
  ranger,
  cavaleiro,
  monge,
  guerreiro,
  samurai,
  druida,
  metamorfo,
  senhorDasFeras,
  clerigo,
  cruzado,
  usurpador,
  bardo,
  barbaro,
  ladino,
  ninja,
  cavaleiroArcano,
  necromante,
  cronomante,
  geomante,
  numeromante,
  paladino,
  artifice,
  algozDaTormenta,
  cavaleiroDaMorte,
  medicoDeSalistick,
  alquimistaDrogadora,
  bruxaDaTormenta,
  mestreDasBonecas,
  cavaleiroDoCorvo,
  ...officialEditorClassDetails,
  ...homebrewClassDetails,
];

export const classDetailsBySlug = Object.fromEntries(classDetails.map((entry) => [entry.slug, entry])) as Record<string, ClassDetail>;
