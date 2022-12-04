Mac系统切换多版本JDK
先在官网下载你需要的JDK版本，写这篇文章时最新版本是[JDK14](https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html)
然后打开检Terminal，并检查你用的Shell。

如果是bash，则在Terminal输入以下指令
```shell
touch .bash_profile
open .bash_profile
```

如果是zsh，则在Terminal输入以下指令
```shell
touch .zprofile
open .zprofile

或则编辑 vim .zprofile 


使用这个  open -e ~/.bash_profile
刷新     source ~/.bash_profile
```

之后会弹出一个文本，接下来就是输入代码的时候了
我这里要切换的是JDK11和JDK14，所以在文本里输入以下代码
```shell
# Configure JDK
# JDK 11
export JAVA_11_HOME=`/usr/libexec/java_home -v 11`
# JDK 14
export JAVA_14_HOME=`/usr/libexec/java_home -v 14`  

# Use Alias
alias jdk11="export JAVA_HOME=$JAVA_11_HOME"  
alias jdk14="export JAVA_HOME=$JAVA_14_HOME"  

export JAVA_HOME=$JAVA_14_HOME
PATH="${JAVA_HOME}:${PATH}"
export PATH  
```
其中 **#** 开头的那些行为注释，并且注意到
```shell
export JAVA_HOME=$JAVA_14_HOME
```
这一行代码是将默认的JDK版本设置为JDK14
> dk11 
> jdk14

这两个 **Alias(别名)** 则是我们切换JDK版本的指令
**之后按保存并关闭该文本，回到Terminal，并输入以下指令使刚才的代码生效**
```shell
source .bash_profile

或者

source .zprofile
```
**下面进行测试**
![image.jpeg](https://cdn.nlark.com/yuque/0/2021/jpeg/2350759/1638061427712-cca2c160-3b3b-459a-bd73-c9c0bf8da0c5.jpeg#averageHue=%23ebecf1&crop=0&crop=0&crop=1&crop=1&height=280&id=rqB8u&name=image.jpeg&originHeight=280&originWidth=1064&originalType=binary&ratio=1&rotation=0&showTitle=false&size=217901&status=done&style=none&title=&width=1064)
