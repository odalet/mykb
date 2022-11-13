# CI/CD

## Worth looking at

* [dotnet-releaser](https://github.com/xoofx/dotnet-releaser):

  dotnet-releaser is an all-in-one command line tool that fully automates the release
  cycle of your .NET libraries and applications to NuGet and GitHub by building, testing,
  running coverage, cross-compiling, packaging, creating release notes from PR/commits and
  publishing.

## Gitlab

### Documentation Generation

* [Document generator for Gitlab : from Markdown to PDF](https://mathieupassenaud.fr/markdown-pdf/)

### Resources

* [CI/CD Examples](https://docs.gitlab.com/ee/ci/examples/)
* Pipeline Examples
  * [.NET Example](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/dotNET.gitlab-ci.yml)
  * [.NET Core Example](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/dotNET-Core.yml)
  * [All examples](https://gitlab.com/gitlab-examples)
* Medium:
  * [GitLab CI/CD with .Net Framework](https://medium.com/@gabriel.faraday.barros/gitlab-ci-cd-with-net-framework-39220808b18f)
  * [Continuous Integration with .NET Core and Gitlab](https://medium.com/faun/continuous-integration-with-net-core-and-gitlab-5cd51161c072)

See also: <https://www.one-tab.com/page/bkeYdZhaTESMtPXdbHIZvQ>

## Nuget

* [Fixing a really common misunderstanding about nuget.exe](https://www.mrlacey.com/2020/08/fixing-really-common-misunderstanding.html)
  * See also: <https://github.com/mrlacey/WindowsTestHelpers/blob/main/src/packandsignnupkg.targets>
* Using GitHub actions and .NET templates: <https://rehansaeed.com/the-fastest-nuget-package-ever-published-probably/>

## Dependabot

Now fully integrated to GitHub, for Azure DevOps, not quite here yet...

* <https://github.com/dependabot/dependabot-core/pull/1211>
* <https://medium.com/@acraven/updating-dependencies-in-azure-devops-repos-773cbbb6029d>
  * <https://github.com/acraven/azure-dependabot>
* <https://david.gardiner.net.au/2020/07/dependabot.html>

## Cake

* How to build with Cake on Linux using Cake.CoreCLR or the Cake global tool: <https://andrewlock.net/how-to-build-with-cake-on-linux-using-cake-coreclr-or-the-cake-global-tool/>
* A bootstrapper script for the Cake .NET Core Global Tool on Windows: <https://andrewlock.net/a-bootstrapper-script-for-the-cake-net-core-global-tool-on-windows/>

## Example projects

* Generating Nuget/Assembly Version info: <https://cezarypiatek.github.io/post/setting-assembly-and-package-metadata/>
* <https://github.com/Microsoft/perfview>
  * Appveyor config: <https://github.com/Microsoft/perfview/blob/master/appveyor.yml>
  * Codecov config: <https://github.com/Microsoft/perfview/blob/master/.codecov.yml>

## Code Coverage

* Generate Code Coverage Reports with ReportGenerator in Azure DevOps: <https://ardalis.com/generate-code-coverage-reports-with-reportgenerator-in-azure-devops>
* **ReportGenerator**
  * <https://github.com/danielpalme/ReportGenerator>
  * Supported by cake: <https://cakebuild.net/dsl/reportgenerator/>
  * History: <https://github.com/danielpalme/ReportGenerator/wiki/Custom-history-storage>

## CI/CD

* Concourse: <https://concourse-ci.org/>
  * Installation Tricks; in the yaml:
    * set privileged to false (privileged s not supported when Docker is in Windows mode)
    * Per <https://github.com/concourse/concourse/issues/3758>, append `CONCOURSE_WORKER_TSA_WORKER_PRIVATE_KEY: a` at the end of the file
  * Tuto: <http://concoursetutorial.com/>
* Gocd: <https://www.gocd.org/>

## Github Actions

* Articles:
  * [Publish VSCode extension using GitHub Actions](https://www.visualstudiogeeks.com/github/extensions/publish-vscode-extension-using-github-actions)
* Series:
  * <https://abelsquidhead.com/index.php/2019/08/30/github-actions-2-0-is-here/>
  * <https://abelsquidhead.com/index.php/2019/09/02/github-actions-2-0-lets-do-something-a-little-more-involved/>; comment from this post:

  >  Azure DevOps Services and Server are still here and going strong. In fact, the office team at microsoft just moved everything over to Azure DevOps Services.
  >
  >  GitHub is a premium offering from Microsoft. They are cloud agnostic and Actions only work with GitHub.
  >
  >  Open source? Code already in GitHub? Makes perfect sense to use Actions (specially when Actions gets more fully fleshed out in terms of features). You’re an enterprise whose code is not in GitHub? Azure DevOps Services work GREAT. And you are now left with a choice. Do you want to pay the premium for GitHub? Is the extra chrome you get with GitHub worth it to you?

  * <https://abelsquidhead.com/index.php/2019/09/07/writing-my-first-custom-github-action/>
* Other material fromthe same author:
  * Example Github Actions: <https://github.com/abelsquidhead/MercuryHealthCore/blob/master/.github/workflows/FullCICD.yml>
  * <https://github.com/abelsquidhead/MercuryHealth>
* Multiple repo checkout: <https://github.com/actions/checkout>  
* _Awesome Github Actions_: <https://github.com/sdras/awesome-actions>
* Artifacts: <https://help.github.com/en/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts>
  * NB: _GitHub does not currently offer a REST API to retrieve uploaded artifacts._
  * Retention: _Artifacts automatically expire after 90 days_
  * <https://github.com/actions/upload-artifact/issues/45>
  * <https://github.com/actions/upload-artifact/issues/49>
  * <https://github.com/kolpav/purge-artifacts-action>

## Azure DevOps

* Articles
  * [Azure DevOps Pipelines – Multi-Stage Pipelines and YAML for Continuous Delivery](https://devblogs.microsoft.com/premier-developer/azure-devops-pipelines-multi-stage-pipelines-and-yaml-for-continuous-delivery/)
  * [Exploring Azure DevOps APIs](https://abhijitjana.net/2020/04/11/exploring-azure-devops-apis/)
* Everything as Code with Azure DevOps Pipelines
  * Part #1: <https://jeremylindsayni.wordpress.com/2019/06/10/everything-as-code-with-azure-devops-pipelines-c-arm-and-yaml-part-1/>
  * Part #2: <https://jeremylindsayni.wordpress.com/2019/06/10/everything-as-code-with-azure-devops-pipelines-c-arm-and-yaml-part-2-multi-stage-builds-in-yaml/>
* VSTS is now Azure DevOps. What has changed and why? <https://www.dotnetcurry.com/devops/1473/vsts-azure-devops-change>
* **Using Secrets in Azure Pipelines**: <https://www.dotnetcurry.com/devops/1507/azure-key-vault-secrets-pipelines>
* **Azure DevOps - YAML for CI-CD Pipelines**: <https://www.dotnetcurry.com/devops/1522/azure-devops-yaml-ci-cd-pipelines>
* Tutos
  * Using Azure DevOps for CI / CD of ASP.NET Core application to Azure Kubernetes Service (AKS): <https://www.dotnetcurry.com/devops/1518/aspnet-core-cicd-azure-kubernetes-service>
  * Using Azure DevOps for Build and Deployment of NodeJS application: <https://www.dotnetcurry.com/devops/1486/azure-devops-build-deploy-nodejs>
  * Using Azure DevOps for NodeJS application optimization using Gulp: <https://www.dotnetcurry.com/devops/1487/azure-devops-nodejs-optimize-using-gulp>
  * Azure DevOps to build and deploy ReactJS App: <https://www.dotnetcurry.com/devops/1488/azure-devops-build-deploy-reactjs>
  * Azure DevOps for TypeScript React.JS App: <https://www.dotnetcurry.com/devops/1499/azure-devops-typescript-reactjs>
  * Azure DevOps for Angular Applications: <https://www.dotnetcurry.com/devops/1504/azure-devops-angular-app>
  * **Security in Azure DevOps (formerly called VSTS)**: <https://www.dotnetcurry.com/devops/1496/azure-devops-security>
  * Use REST APIs to access Azure DevOps (formerly VSTS): <https://www.dotnetcurry.com/devops/1485/using-rest-api-azure-devops>
  * <https://sibeeshpassion.com/move-git-repositories-from-one-to-other-organization-in-azure-devops/>
  * shields: <https://raw.githubusercontent.com/ngs-lang/ngs/master/readme.md>
  * Multiple-stage pipelines:
    * <https://mohitgoyal.co/2019/07/30/create-multi-stage-pipelines-with-yaml-in-azure-devops/>
    * <https://mohitgoyal.co/2019/08/21/add-manual-approvers-for-release-stages-in-multi-stage-pipelines-in-azure-devops/>
* Multiple repo Checkout:
  * <https://docs.microsoft.com/en-us/azure/devops/pipelines/repos/multi-repo-checkout?view=azure-devops>
  * <https://stackoverflow.com/questions/54309467/azure-devops-multiple-repositories>
  * <https://stackoverflow.com/questions/49571664/vsts-build-from-multiple-repositories>
* Reuse:
  * Task groups: <https://docs.microsoft.com/en-us/azure/devops/pipelines/library/task-groups?view=azure-devops&viewFallbackFrom=vsts>
  * Yaml templates: <https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema%2Cparameter-schema#step-templates>
* Articles:
  * [Caching and faster artifacts in Azure Pipelines](https://devblogs.microsoft.com/devops/caching-and-faster-artifacts-in-azure-pipelines/)
* Admin
  * [Measuring Concurrent Jobs Over Time](https://www.andrewkanieski.com/post/azure-devops-concurrent-jobs-report/)
* Docker
  * [How the .NET Team uses Azure Pipelines to produce Docker Images](https://devblogs.microsoft.com/dotnet/how-the-net-team-uses-azure-pipelines-to-produce-docker-images/)  

----

* <http://www.frankysnotes.com/2020/03/how-to-know-how-much-your-application.html>
* <https://devblogs.microsoft.com/devops/introducing-the-new-pull-request-experience-for-azure-repos/>

## Azure DevOps vs Github Actions

* <https://www.eshlomo.us/github-actions-vs-azure-devops-ap/>
* <https://blogs.endjin.com/2019/10/comparing-github-actions-and-azure-pipelines-high-level-concepts/>
* <https://www.jamesqmurphy.com/blog/2019/11/github-actions>

> Essentially, the GitHub Actions feature seems to be Azure Pipelines baked right into GitHub.
>
> From a long term perspective, I'm curious about the future of GitHub as it pertains to Azure DevOps. Several speakers have described the GitHub community as "40 million collaborators to work with", so perhaps Microsoft intends to keep GitHub for open source projects, and Azure DevOps for private industry. We shall see.

* Then: <https://www.jamesqmurphy.com/blog/2019/11/github-actions-is-not-azure-pipelines>

> I was wrong about GitHub Actions being just "Azure Pipelines baked right into GitHub".
>
> In my previous post I challenged myself to convert my existing Azure DevOps Pipeline into GitHub Actions. So how did that work out?
>
> _What did not work (so well)_:
>
> * **Build Numbers**: GitHub Actions simply does not have the concept of build numbers.
>
> * **No Build Variables**: In GitHub Actions, there are no build variables per se.
>
> _Conclusion_:
>
> They _do_ serve different purposes. GitHub is geared for Open Source projects,
> _(...)_ GitHub will (and _must_) remain neutral. _(...)_  Azure DevOps can promote the heck out of Microsoft Azure.

* Github Actions as a way to drive Azure DevOps: <https://medium.com/@charotamine/azure-devops-as-code-github-actions-1b66c02c89d4>
  * DevOps: _Azure DevOps exposes [REST APIs](https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-5.1&viewFallbackFrom=vsts-rest-5.0) which provide a full control of the service._
* Converting Azure DevOps tasks to Github actions: <https://blogs.blackmarble.co.uk/rfennell/2019/09/10/a-first-look-at-github-action-converting-my-azure-devops-tasks-to-github-actions/>
* Building My Blog with GitHub Actions _Coming from an Azure DevOps-based deployment pipeline_: <https://www.isaaclevin.com/post/blog-on-actions/>
* _GitHub Actions for Azure Pipelines_: <https://docs.microsoft.com/en-us/azure/devops/release-notes/2019/sprint-161-update>

## Gitlab + Windows

* Install Runner on Windows: <https://docs.gitlab.com/runner/install/windows.html>
* Runner Doc: <https://docs.gitlab.com/runner/>
* En français : <https://guillaumebriday.fr/installer-et-utiliser-les-gitlab-runners>
* On Windows: <https://medium.com/@khandelwal12nidhi/setting-up-gitlab-runner-on-windows-d3c46b855ec9>
* Issue (Document current best practice for shared Windows GitLab CI runners): <https://gitlab.com/gitlab-org/gitlab-runner/issues/3379>
  * Associated Merge Request: <https://gitlab.com/gitlab-org/gitlab-runner/merge_requests/706>
  * Linked issue (Windows Container Executor): <https://gitlab.com/gitlab-org/gitlab-runner/issues/2609>
  * Interesting links:
    * Windows _packer_ pipelines: <https://github.com/StefanScherer/packer-windows>
    * Example Dockerfile for running gitlab-runner in a Windows container: <https://github.com/patsissons/docker-gitlab-runner-windows>
    * Microsoft's VSTS Hosted Pool packer templates <https://github.com/Microsoft/vsts-image-generation>
    * NB: this uses _packer_ from Hachicorp (creators of Vagrant) to automate building the VM images See [vm](../ops/ops@vm.md)
