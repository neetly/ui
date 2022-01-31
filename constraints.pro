gen_enforced_field(WorkspaceCwd, 'homepage', 'https://github.com/neetly/design').
gen_enforced_field(WorkspaceCwd, 'repository.type', 'git').
gen_enforced_field(WorkspaceCwd, 'repository.url', 'git@github.com:neetly/design.git').
gen_enforced_field(WorkspaceCwd, 'repository.directory', WorkspaceCwd) :-
  WorkspaceCwd \= '.'.
gen_enforced_field(WorkspaceCwd, 'license', 'Apache-2.0').

gen_enforced_field(WorkspaceCwd, 'scripts.prepack', 'run clean && run build && cp ../../LICENSE .') :-
  \+ workspace_field(WorkspaceCwd, 'private', 'true').

gen_enforced_dependency(WorkspaceCwd, DependencyIdent, DependencyRange2, DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  workspace_has_dependency(_, DependencyIdent, DependencyRange2, DependencyType2),
  DependencyType \= 'peerDependencies',
  DependencyType2 \= 'peerDependencies'.
