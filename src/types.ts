import { type } from '@testing-library/user-event/dist/type';

const AreaName = {
  TargetIntelligence: 'Target Intelligence',
  In: 'In',
  Through: 'Through',
  Out: 'Out',
} as const;

const TacticName = {
  OrganizationalInformationGathering: 'Organizational Information Gathering',
  PeopleInformationGathering: 'People Information Gathering',
  PriorityDefinitionDirection: 'Priority Definition Direction',
  PriorityDefinitionPlaning: 'Priority Definition Planing',
  TargetSelection: 'Target Selection',
  TechnicalInformationGathering: 'Technical Information Gathering',
} as const;

export type Technique = {
  id: number;
  name: string;
  sort_id: number;
  external_id: string;
  external_sub_id: string;
  old_external_id: string;
  old_external_sub_id: string;
  tactic_id: number;
  description: string;
  is_deprecated: boolean;
  created_at: string | null;
  updated_at: string | null;
  is_detectable_by_common_defenses: boolean | null;
  detectable_by_common_defenses_explanation: string | null;
  difficulty_for_adversary: boolean | null;
  difficulty_for_adversary_explanation: string | null;
  detection: string | null;
  platforms: Platform[];
};

export type Pivot = {
  technique_id: number;
  framework_stage_id: number;
  created_at?: string | null;
  updated_at?: string | null;
};

export type Tactic = {
  id: number;
  name: keyof typeof TacticName;
  source_name: string;
  sort_id: number;
  external_id: string;
  category_id: number;
  created_at: string | null;
  updated_at: string | null;
  pivot: Pivot;
  techniques: Technique[];
};

export type Area = {
  id: number;
  name: keyof typeof AreaName;
  tactics: Tactic[];
};

const CategoryName = {
  PreATTC: 'Pre-ATT&C',
  Enterprise: 'Enterprise',
  Mobile: 'Mobile',
  ICS: 'ICS',
};

export type Platform = {
  id: number;
  name: string;
  created_at?: string | null;
  updated_at?: string | null;
  pivot?: Pivot;
};

export type Category = {
  id: number;
  name: keyof typeof CategoryName;
  color: string;
  created_at: string | null;
  updated_at: string | null;
  platforms: Platform[];
};
