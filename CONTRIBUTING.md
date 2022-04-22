# Contributing to manure

## Pull request title format

```
<Type>(<Scope>): <Message>
```

### Example

Single scope

```
feat(compiler): support array
```

Multiple scopes

```
feat(compiler, examples): support array
```

### Type

| Type     | Meaning                                                            |
| -------- | ------------------------------------------------------------------ |
| fix      | A bug fix                                                          |
| feat     | A new feature                                                      |
| test     | Adding missing tests or correcting existing tests                  |
| refactor | A code change that neither fix a bug or add a new feature          |
| style    | Change that doesn't affect the mean of code (beautify, ...)        |
| perf     | Change that improve performance                                    |
| build    | Change that affect build system (package.json, tsconfig.json, ...) |
| cicd     | DevOps changes                                                     |
| chore    | Other change that don't modify src or test files                   |
| revert   | Revert a previous commit                                           |

### Scope

`.vscode`, `compiler`, `examples`, `rollup-plugin`, `material`, `runtime`, `all`

### Message: No conventions, emoticon is appreciated!

> We don't have format for individual commit messages. Only pull request title are listed in GitHub Release track.
