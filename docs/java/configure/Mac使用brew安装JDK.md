## 旧版本
### 1、搜索jdk
> [https://github.com/AdoptOpenJDK/homebrew-openjdk](https://github.com/AdoptOpenJDK/homebrew-openjdk)

```shell
brew search jdk
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2350759/1670047460961-0883a7ca-a523-4135-bbb0-651d752a5fe0.png#averageHue=%232b2d39&clientId=u342a9728-c33b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=199&id=ub32f76d5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=346&originWidth=1280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46288&status=done&style=none&taskId=u3792ee0d-f25c-406d-bc59-c93ae86a1f0&title=&width=738)
> 如果你获取的列表中没有adoptopenjdk8等，请执行 brew tap adoptopenjdk/openjdk。brew只收录了adoptopenjdk最后的版本，一些过期的版本，交由adoptopenjdk自己管理。而 brew tap adoptopenjdk/openjdk，则是拉取adoptopenjdk自管理包的信息。

```shell
brew tap adoptopenjdk/openjdk
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2350759/1670047719544-b42406ca-d1fb-4038-884c-eb06df1c9a0a.png#averageHue=%232e303c&clientId=u378db324-ae12-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=392&id=u8efbe66e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=684&originWidth=1296&originalType=binary&ratio=1&rotation=0&showTitle=false&size=164248&status=done&style=none&taskId=uf4bf6f94-b4f7-4547-b60f-b4bdb418f22&title=&width=743)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2350759/1670047777412-6a7a80b7-86af-47c3-99cc-46ff5cebdaa5.png#averageHue=%232e303c&clientId=u378db324-ae12-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=637&id=ud3c7e6fb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1274&originWidth=2152&originalType=binary&ratio=1&rotation=0&showTitle=false&size=260259&status=done&style=none&taskId=u37515cca-58a3-43c0-9875-ea386f2cda4&title=&width=1076)

### 2、安装jdk8
```shell
brew install --cask adoptopenjdk8
```
### 3、查看jdk 版本
```shell
java -version
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2350759/1670057972526-a2caf6d2-b7dc-49be-8ed1-2a750b168edd.png#averageHue=%232c2d39&clientId=u378db324-ae12-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=451&id=ue3b39142&margin=%5Bobject%20Object%5D&name=image.png&originHeight=902&originWidth=2338&originalType=binary&ratio=1&rotation=0&showTitle=false&size=212128&status=done&style=none&taskId=u1064667d-9516-4614-b9e2-7a19db980b8&title=&width=1169)
### 4、查看jdk安装路径
```shell
/usr/libexec/java_home -V

环境变量
echo $JAVA_HOME$
```
### 5、卸载jdk
```shell
brew uninstall --cask adoptopenjdk8
```
## 新版本：
> AdoptOpenJDK 已被弃用，并从 Adoptium 过渡到 Eclipse Temurin

The new website for this project is [here called Adoptium](https://adoptium.net/) . In Homebrew, the package that installs the new AdoptOpenJDK is [here named temurin](https://formulae.brew.sh/cask/temurin#default). 
> 这个项目的新网站在这里被称为Adoptium。在Homebrew中，安装新的AdoptOpenJDK的包在这里名为temurin。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2350759/1670064628524-bdd51941-4eae-4dfc-ae5c-f264086bcc80.png#averageHue=%23322e26&clientId=u378db324-ae12-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=849&id=u063d631f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1698&originWidth=2492&originalType=binary&ratio=1&rotation=0&showTitle=false&size=232240&status=done&style=none&taskId=u782b075a-85ec-41fd-bdf9-1485777de16&title=&width=1246)
### 1、安装最新版本
```shell
brew install --cask temurin
```
### 2、安装指定版本jdk
```shell
brew tap homebrew/cask-versions
brew install --cask temurin17   # jdk17
brew install --cask temurin8    # jdk8
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2350759/1670067927551-bea46bd6-8926-4423-a4eb-6ae0fbe3498b.png#averageHue=%232e303c&clientId=u0dfbd2ff-dce8-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=119&id=uaf169734&margin=%5Bobject%20Object%5D&name=image.png&originHeight=238&originWidth=2058&originalType=binary&ratio=1&rotation=0&showTitle=false&size=88628&status=done&style=none&taskId=ub35e0a39-e2c8-430e-b933-46e56af16ae&title=&width=1029)

## 异常处理
### 问题1：
> Error: Cask adoptopenjdk8 exists in multiple taps:
>   homebrew/cask-versions/adoptopenjdk8
>   adoptopenjdk/openjdk/adoptopenjdk8

```shell
sudo rm -rf /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask-versions/Casks/adoptopenjdk8.rb
```
