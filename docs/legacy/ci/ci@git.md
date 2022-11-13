# Multi-repos management

## GitHub 'Profile' Repository Resources

* <https://dev.to/m0nica/how-to-create-a-github-profile-readme-1paj?signin=true>
* <https://github.com/coderjojo/creative-profile-readme>
* <https://github.com/anuraghazra/github-readme-stats>
* <https://github.com/MikeCodesDotNET/ColoredBadges>

## Badges

See <https://raw.githubusercontent.com/natemcmaster/DotNetCorePlugins/main/README.md>:

```md
[![Build Status][ci-badge]][ci] [![Code Coverage][codecov-badge]][codecov]
[![NuGet][nuget-badge] ![NuGet Downloads][nuget-download-badge]][nuget]

[ci]: https://github.com/natemcmaster/DotNetCorePlugins/actions?query=workflow%3ACI+branch%3Amain
[ci-badge]: https://github.com/natemcmaster/DotNetCorePlugins/workflows/CI/badge.svg
[codecov]: https://codecov.io/gh/natemcmaster/DotNetCorePlugins
[codecov-badge]: https://codecov.io/gh/natemcmaster/DotNetCorePlugins/branch/main/graph/badge.svg?token=l6uSsHZ8nA
[nuget]: https://www.nuget.org/packages/McMaster.NETCore.Plugins/
[nuget-badge]: https://img.shields.io/nuget/v/McMaster.NETCore.Plugins.svg?style=flat-square
[nuget-download-badge]: https://img.shields.io/nuget/dt/McMaster.NETCore.Plugins?style=flat-square
```

## Tags and Semantic Versioning

* SemVer v2.0: <https://semver.org/spec/v2.0.0.html>
* <http://www.leerichardson.com/2019/05/code-sharing-part-2-automatic-semantic.html>
  * minver: <https://github.com/adamralph/minver>
  * GitVersion: <https://github.com/GitTools/GitVersion>
  * Nerdbank.GitVersioning: <https://github.com/AArnott/Nerdbank.GitVersioning>

## Mono-repo

* **meta**:
  * <https://github.com/mateodelnorte/meta>
  * <https://medium.com/@patrickleet/mono-repo-or-multi-repo-why-choose-one-when-you-can-have-both-e9c77bd0c668>  
  * <https://medium.com/@patrickleet/developing-a-plugin-for-meta-bd2e9c39882d>
* monolithic vs micro-repos:
  * <https://github.com/IcaliaLabs/guides/wiki/Monolithic-vs-Micro-Repos>
  * <https://stackoverflow.com/questions/31003910/monolith-git-repo-vs-micro-repos>
  * <http://danluu.com/monorepo/>
* Tools
  * repobuild: <https://github.com/chrisvana/repobuild>
  * Bazel: <https://bazel.build/>
  * Fabric: <http://www.fabfile.org/>
  * **myrepos**: <https://myrepos.branchable.com/>
  * Google's repo: <https://source.android.com/setup/develop/>

## Huge repos handling

* <https://www.atlassian.com/blog/git/handle-big-repositories-git>
  * shallow clone: `git clone --depth [depth] [remote-url]`
  * 1-branch only clone: `git clone [remote url] --branch [branch_name] --single-branch [folder]`
  * sparse checkout:
    * <https://stackoverflow.com/questions/600079/how-do-i-clone-a-subdirectory-only-of-a-git-repository>
    * shallow clone + sparse checkout: <https://stackoverflow.com/questions/600079/how-do-i-clone-a-subdirectory-only-of-a-git-repository/28039894#28039894>
    * Via svn: <https://stackoverflow.com/questions/7106012/download-a-single-folder-or-directory-from-a-github-repo/18324458#18324458>
* sub-modules: <https://www.atlassian.com/blog/git/git-submodules-workflows-tips>
* sub-trees: <https://www.atlassian.com/blog/git/alternatives-to-git-submodule-git-subtree>
* partial clone: <https://github.com/git/git/blob/master/Documentation/technical/partial-clone.txt>

## Trigger builds + Include/Exclude path

* VSTS:
  * <https://visualstudio.uservoice.com/forums/330519-visual-studio-team-services/suggestions/5279254-allow-git-ci-builds-to-monitor-changes-only-in-a-s>
  * <https://mitchdenny.com/path-filters-in-vsts-build/>
  * <https://stackoverflow.com/questions/38426697/trigger-ci-build-only-on-changes-to-subfolder-in-vsts-was-tfs-online-using-gi>
  * <https://docs.microsoft.com/en-us/vsts/pipelines/build/triggers?view=vsts&tabs=yaml>
* Gitlab (impossible)
  * <https://gitlab.com/gitlab-org/gitlab-ce/issues/19813>
  * <https://gitlab.com/gitlab-org/gitlab-ce/issues/19232>
* Jenkins (google: *jenkins git trigger exclude path*):
  * <https://issues.jenkins-ci.org/browse/JENKINS-25048>
  * <https://stackoverflow.com/questions/12211227/excluded-regions-in-jenkins-with-git>
  * <https://github.com/KostyaSha/github-integration-plugin/issues/117>
  * <https://github.com/jenkinsci/gitlab-plugin/issues/654>
  * <https://support.cloudbees.com/hc/en-us/articles/226568007-How-to-Trigger-Non-Multibranch-Jobs-from-BitBucket-Server->
  * **<https://stackoverflow.com/questions/44901004/how-to-only-build-one-directory-in-a-jenkins-multi-branch-pipeline-job>**
  * Chaining... <https://stackoverflow.com/questions/49703118/how-do-i-chain-jenkins-pipelines-from-a-checked-out-git-repo>

## Tutorials

* <https://dev.to/chrisachard/confused-by-git-here-s-a-git-crash-course-to-fix-that-4cmi>