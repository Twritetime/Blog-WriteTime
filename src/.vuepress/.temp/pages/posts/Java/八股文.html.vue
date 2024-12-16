<template><div><!-- more -->
<h2 id="一、基础" tabindex="-1"><a class="header-anchor" href="#一、基础"><span>一、基础</span></a></h2>
<h3 id="_1-1-面向对象和面向过程的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-面向对象和面向过程的区别"><span>1.1.  面向对象和面向过程的区别</span></a></h3>
<p>面向对象：拆分对象</p>
<p>面向过程：拆分方法 洗衣机</p>
<p>面向过程编程（Procedural-Oriented Programming，POP）和面向对象编程（Object-Oriented Programming，OOP）是两种常见的编程范式，两者的主要区别在于解决问题的方式不同：</p>
<ul>
<li><strong>面向过程编程（POP）</strong>：面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。</li>
<li><strong>面向对象编程（OOP）</strong>：面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。</li>
</ul>
<p><strong>洗衣机洗衣服：</strong></p>
<p>面向过程会将任务拆解成一系列的方法，1、打开洗衣机-----&gt;2、放衣服-----&gt;3、放洗衣粉-----&gt;4、清洗-----&gt;5、烘干
面向对象会拆出人和洗衣机两个对象：人：打开洗衣机 放衣服 放洗衣粉	洗衣机：清洗 烘干</p>
<p>OOP 优点：</p>
<ul>
<li><strong>易维护</strong>：由于良好的结构和封装性，OOP 程序通常更容易维护。</li>
<li><strong>易复用</strong>：通过继承和多态，OOP 设计使得代码更具复用性，方便扩展功能。</li>
<li><strong>易扩展</strong>：模块化设计使得系统扩展变得更加容易和灵活。</li>
</ul>
<p>POP 的编程方式通常更为简单和直接，适合处理一些较简单的任务。</p>
<h3 id="_1-2-面向对象三大特性" tabindex="-1"><a class="header-anchor" href="#_1-2-面向对象三大特性"><span>1.2. 面向对象三大特性</span></a></h3>
<p>封装：属性对内 方法对外 空调</p>
<p>继承：父类 属性 方法</p>
<p>多态：对象 属类相同 方法不同 父引用-&gt;子对象</p>
<p>封装：是指把一个对象的状态信息（属性）隐藏在对象内部，不允许外部对象直接访问对象的内部信息。但是可以提供一些可以被外界访问的方法来操作属性。</p>
<p>就好像我们看不到挂在墙上的空调的内部的零件信息（也就是属性），但是可以通过遥控器（方法）来控制空调。如果属性不想被外界访问，我们大可不必提供方法给外界访问。但是如果一个类没有提供给外界访问的方法，那么这个类也没有什么意义了。就好像如果没有空调遥控器，那么我们就无法操控空凋制冷，空调本身就没有意义了</p>
<p>继承：继承父类的方法，并做出自己的改变和/或扩展子类共性的方法或者属性直接使用父类的，而不需要自己再定义，只需扩展自己个性化的</p>
<p>多态：基于对象所属类的不同，外部对同一个方法的调用，实际执行的逻辑不同。</p>
<p>继承，方法重写，父类引用指向子类对象，无法调用子类特有的功能</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">父类类型 变量名 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> 子类对象 </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">变量名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">方法名()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-string-stringbuffer-stringbuilder-区别" tabindex="-1"><a class="header-anchor" href="#_1-3-string-stringbuffer-stringbuilder-区别"><span>1.3. String/StringBuffer/StringBuilder 区别</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835401.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>String 是不可变的字符串，每次修改都会创建新的对象，适用于不经常修改的字符串操作；</p>
<p>StringBuffer 是可变的字符串，线程安全，适用于多线程环境；
StringBuilder 也是可变的字符串，但不是线程安全的，适用于单线程频繁修改字符串的场景。</p>
<h3 id="_1-4-和-equals-的区别" tabindex="-1"><a class="header-anchor" href="#_1-4-和-equals-的区别"><span>1.4. == 和 equals 的区别</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835402.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>&quot;==&quot;用于比较基本类型的值或引用对象的地址值是否相等</p>
<p>equals 方法用于比较对象的内容是否相等</p>
<p>简而言之，&quot;==&quot;比较的是值，equals 比较的是内容</p>
<h3 id="_1-5-接口和抽象类的区别" tabindex="-1"><a class="header-anchor" href="#_1-5-接口和抽象类的区别"><span>1.5. 接口和抽象类的区别</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835403.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>接口主要是用于制定规范</p>
<p>抽象类主要为了复用，比较典型的就是模板方法模式</p>
<p>⼀个类可以实现多个接口，但只能继承⼀个抽象类</p>
<p>接口中的成员变量只能由 public static final 修饰，而抽象类中的成员变量可以是各种类型的</p>
<p>简而言之，接口关注的是行为的规范，而抽象类关注的是共享的属性。</p>
<h3 id="_1-6-重写和重载的区别" tabindex="-1"><a class="header-anchor" href="#_1-6-重写和重载的区别"><span>1.6. 重写和重载的区别</span></a></h3>
<p>重写（override）指的是子类重新实现了父类中已有的方法，子类的方法具有相同的名称、参数列表和返回类型。</p>
<p>重载（overload）指的是在同一个类中定义了多个方法，它们的方法名称相同但参数列表不同。</p>
<h3 id="_1-7-浅拷贝和深拷贝的区别" tabindex="-1"><a class="header-anchor" href="#_1-7-浅拷贝和深拷贝的区别"><span>1.7. 浅拷贝和深拷贝的区别</span></a></h3>
<p>浅拷贝：对象指针 地址相同</p>
<p>深拷贝：对象本身 地址不同</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835404.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835405.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<ul>
<li><strong>浅拷贝</strong>：浅拷贝只复制对象的指针而不复制对象本身,两个引用指针指向被复制对象(CloneObject1)的同一块引用地址</li>
<li><strong>深拷贝</strong>：深拷贝会完全复制整个对象，新老对象(CloneObject1,2)不共享内存</li>
</ul>
<h3 id="_1-8-值传递和引用传递的区别" tabindex="-1"><a class="header-anchor" href="#_1-8-值传递和引用传递的区别"><span>1.8. 值传递和引用传递的区别</span></a></h3>
<p>值传递是对基本型变量而言的,传递的是该变量的一个副本,改变副本不影响原变量。</p>
<p>引用传递一般是对于对象型变量而言的,传递的是该对象地址的一个副本, 并不是原对象本身 。</p>
<p>一般认为,java 内的传递都是值传递. java 中实例对象的传递是引用传递。</p>
<h3 id="_1-9-io-流" tabindex="-1"><a class="header-anchor" href="#_1-9-io-流"><span>1.9. <a href="https://javaguide.cn/java/io/io-basis.html" target="_blank" rel="noopener noreferrer">IO 流</a></span></a></h3>
<p>IO 即 <code v-pre>Input/Output</code>，输入和输出。数据输入到计算机内存的过程即输入，反之输出到外部存储（比如数据库，文件，远程主机）的过程即输出。数据传输过程类似于水流，因此称为 IO流。IO 流在 Java 中分为输入流和输出流，而根据数据的处理方式又分为字节流和字符流。</p>
<p>Java IO 流的 40 多个类都是从如下 4 个抽象类基类中派生出来的。</p>
<ul>
<li><code v-pre>InputStream</code>/<code v-pre>Reader</code>: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。</li>
<li><code v-pre>OutputStream</code>/<code v-pre>Writer</code>: 所有输出流的基类，前者是字节输出流，后者是字符输出流。</li>
</ul>
<h3 id="_1-10-反射" tabindex="-1"><a class="header-anchor" href="#_1-10-反射"><span>1.10. 反射</span></a></h3>
<p>Java 的反射机制是指在运行时动态地获取类的信息并操作类或对象的能力。</p>
<p>通过反射，我们可以在编译时无法确定的情况下，通过类名获取类的实例、获取类的字段、方法、构造函数等信息，并且可以在运行时调用这些方法或访问这些字段。</p>
<p><strong>反射方法：</strong></p>
<ol>
<li><code v-pre>Class.forName(String className)</code>：根据类名获取对应的 Class 对象。</li>
<li><code v-pre>getClass()</code>：获取对象的运行时类型。</li>
<li><code v-pre>getMethod(String name, Class&lt;?&gt;... parameterTypes)</code>：获取指定方法名和参数类型的方法。</li>
<li><code v-pre>getField(String name)</code>：获取指定名称的字段。</li>
<li><code v-pre>newInstance()</code>：使用默认的构造函数创建实例。</li>
<li><code v-pre>newInstance(Object... initargs)</code>：使用指定参数类型和值的构造函数创建实例。</li>
<li><code v-pre>invoke(Object obj, Object... args)</code>：调用指定对象的方法。</li>
</ol>
<h3 id="_1-11-sleep-和-wait-的区别" tabindex="-1"><a class="header-anchor" href="#_1-11-sleep-和-wait-的区别"><span>1.11. sleep 和 wait 的区别</span></a></h3>
<p>sleep：Thread类方法 不释放对象锁</p>
<p>wait：Object类方法 释放对象锁</p>
<p>sleep 是线程类（Thread）的方法，导致此线程暂停执行指定时间，给执行机会给其他线程，但是监控状态依然保持，到时后会自动恢复。调用 sleep 不会释放对象锁。</p>
<p>wait 是 Object 类的方法，对此对象调用 wait 方法导致本线程释放对象锁，进入等待此对象的等待锁定池，只有针对此对象发出 notify 方法（或 notifyAll）后本线程才进入对象锁定池准备获得对象锁进入运行状态。</p>
<h3 id="_1-12-jvm-内存模型" tabindex="-1"><a class="header-anchor" href="#_1-12-jvm-内存模型"><span>1.12. JVM 内存模型</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835406.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835407.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835408.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>Java 的内存结构主要包括方法区、堆、虚拟机栈、本地方法栈和程序计数器。方法区用于存储类信息，堆用于存储对象实例，虚拟机栈用于存储方法调用和局部变量，本地方法栈用于存储非 Java 方法信息，程序计数器用于记录当前线程执行的指令地址。</p>
<p><strong>堆：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835409.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<ol>
<li>主要存放对象</li>
<li>新创建的对象都会放在堆上面</li>
<li>线程共享的</li>
<li>需要进行垃圾回收</li>
<li>如果内存不够、没有空间去分配给新创建的对象 =》OutOfMemoryError</li>
</ol>
<p><strong>堆的组成：</strong></p>
<ol>
<li>年轻代（eden + s0 + s1）</li>
</ol>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835410.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<ol start="2">
<li>老年代</li>
</ol>
<p><strong>栈：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835411.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<ol>
<li>虚拟机栈</li>
<li>线程私有的</li>
<li>栈里是一个个的栈帧（frame），每个栈帧对应一个被调用的方法</li>
</ol>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835412.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> get</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> n){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">||</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> get</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> get</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(1）局部变量表（local variables）</p>
<p>（2）操作数栈</p>
<p>（3）动态链接（调用的别的方法）</p>
<p>（4）返回地址和一些额外信息</p>
<ol start="4">
<li>如果一个栈里的栈帧过多，就有可能出现stackoverflowError</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> get</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">( ){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> get</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>本地方法栈：</strong></p>
<ol>
<li>专门为了native本地方法使用</li>
<li>Java语言不能直接对操作系统底层进行访问和操作，所以需要通过JNI（Java Native Interface）去调用别的语言（C、C++、汇编）来实现对底层的访问</li>
<li>线程私有的</li>
</ol>
<p><strong>程序计数器：</strong></p>
<ol>
<li>线程私有的</li>
<li>存储当前线程执行的位置、行号</li>
<li>当线程切换，通过程序计数器知道从哪里重新运行</li>
</ol>
<p>**元空间（Metaspace）：**JDK8以后对JVM最大的一个调整</p>
<ol>
<li>保存类相关的信息：类的名字、方法名字、字段信息、静态变量</li>
<li>放在JVM外面</li>
</ol>
<p><strong>引起OOM的常见原因：</strong></p>
<ol>
<li><strong>Java Heap Space：</strong>
堆没有足够空间存放新创建的对象：
（1）创建了超大对象，一般都是大数组。	调大堆的空间大小
（2）特殊场景：双11，超出预期的访问量、数据量。 双11 =》限流
（3）内存泄露：例子threadlocal，本来应该把它回收，但是没有回收成功，内存空间无法使用。 找bug</li>
<li><strong>GC Overhead limit exceeded：</strong>**
**Java垃圾回收花费了非常多的时间进行垃圾回收，但是回收了一点点内存，并且这种情况已经连续重复了5次
说明可用的堆空间已经非常非常少了，GC也无能为力</li>
<li><strong>Metaspace：</strong>**
**说明元空间满了，因为加载的类太多了</li>
<li><strong>Unable to create new native thread：</strong>**
**因为创建的Java线程太多了，没有足够的资源进行分配了</li>
</ol>
<h3 id="_1-13-jvm-类加载器" tabindex="-1"><a class="header-anchor" href="#_1-13-jvm-类加载器"><span>1.13. JVM 类加载器</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835413.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>加载过程：</strong></p>
<ol>
<li>加载：通过类的全限定名获取字节码文件，并将其转换为方法区内的运行时数据结
构。</li>
<li>验证：对.class文件 里的字节码进行校验，确保符合 Java 虚拟机规范，能被执行。</li>
<li>准备：为类的静态变量分配内存，并设置默认初始值。</li>
<li>解析：将符号引用转换为直接引用，即将类、方法、字段等解析为具体的内存地址。</li>
<li>初始化：执行类的初始化代码，包括静态变量赋值和静态代码块的执行。</li>
</ol>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835414.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>分类：</strong></p>
<p>一、系统本身自带类加载器</p>
<p>（1）启动类加载器（Bootstrap classloader）</p>
<p>主要负责Java目录下核心类（lib目录，java中最核心的类库，支撑Java系统的运行）</p>
<p>（2）扩展类加载器（Extensions classloader）</p>
<p>lib/ext目录下的内容</p>
<p>（3）应用类加载器（Application classloader）</p>
<p>简单理解为加载程序员自己写好的代码</p>
<p>二、自定义类加载器</p>
<p>满足一些特殊需求，需要继承 java.lang.ClassLoader 来实现</p>
<h3 id="_1-14-jvm-双亲委派机制" tabindex="-1"><a class="header-anchor" href="#_1-14-jvm-双亲委派机制"><span>1.14. JVM 双亲委派机制</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835416.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>双亲委派机制是指类加载器在加载类时，首先将加载请求委托给父类加载器，只有当父类加载器无法加载时，才自己尝试加载。从而确保类的加载安全和防止类的重复加载。</p>
<p>java.lang.Object，它是放在rt.jar之中，它永远都会被最上面的加载器进行加载，因此无论在任何环境下，都能找到这个类</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835417.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>不同classloader加载的类肯定是不相同的，相当于在JVM当中创建了一个个互相隔离的空间，这种技术在框架中经常被使用</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835418.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_1-15-jvm-垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#_1-15-jvm-垃圾回收算法"><span>1.15. JVM 垃圾回收算法</span></a></h3>
<p>（1）**标记 - 清理：**导致内存碎片</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835419.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>（2）**标记 - 整理：**释放完空间后，会对整个内存空间进行整理，去除内存碎片</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835420.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>缺点：整理的过程非常慢，非常耗资源</p>
<p>（3）**复制 - 清理：**先标记哪些需要被删除，哪些需要被复制</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241205220835421.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>缺点：空间只能用一半</p>
<h2 id="二、集合" tabindex="-1"><a class="header-anchor" href="#二、集合"><span>二、集合</span></a></h2>
<h3 id="_1-1-java-常用的集合、分类、接口" tabindex="-1"><a class="header-anchor" href="#_1-1-java-常用的集合、分类、接口"><span>1.1. Java 常用的集合、分类、接口</span></a></h3>
<p>Java 集合，也叫作容器，主要是由两大接口派生而来：一个是 <code v-pre>Collection</code>接口，主要用于存放单一元素；另一个是 <code v-pre>Map</code> 接口，主要用于存放键值对。对于<code v-pre>Collection</code> 接口，下面又有三个主要的子接口：<code v-pre>List</code>、<code v-pre>Set</code> 、 <code v-pre>Queue</code>。</p>
<p>Java 集合框架如下图所示：</p>
<p><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555785.png" alt="img" loading="lazy"><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555786.jpeg" alt="img" loading="lazy"></p>
<p><strong>实现类：</strong></p>
<ul>
<li><strong>List</strong>：ArrayList 是基于数组的动态列表，LinkedList 是基于链表的列表，Vector 是线程安全的列表。</li>
<li><strong>Set</strong>：HashSet 是基于哈希表的集合，LinkedHashSet 是基于哈希表和链表的集合，TreeSet 是基于红黑树的有序集合。</li>
<li><strong>Map</strong>：HashMap 是基于哈希表的映射，LinkedHashMap 是基于哈希表和链表的映射，TreeMap 是基于红黑树的有序映射。</li>
<li><strong>Queue</strong>：LinkedList 可以作为队列使用，PriorityQueue 是基于优先级的队列。</li>
</ul>
<h3 id="_1-2-arraylist-和-array-数组-的区别" tabindex="-1"><a class="header-anchor" href="#_1-2-arraylist-和-array-数组-的区别"><span>1.2. ArrayList 和 Array（数组）的区别</span></a></h3>
<p><code v-pre>ArrayList</code> 内部基于动态数组实现，比 <code v-pre>Array</code>（静态数组） 使用起来更加灵活：</p>
<ul>
<li><code v-pre>ArrayList</code>会根据实际存储的元素动态地扩容或缩容，而 <code v-pre>Array</code> 被创建之后就不能改变它的长度了。</li>
<li><code v-pre>ArrayList</code> 允许你使用泛型来确保类型安全，<code v-pre>Array</code> 则不可以。</li>
<li><code v-pre>ArrayList</code> 中只能存储对象。对于基本类型数据，需要使用其对应的包装类（如 Integer、Double 等）。<code v-pre>Array</code> 可以直接存储基本类型数据，也可以存储对象。</li>
<li><code v-pre>ArrayList</code> 支持插入、删除、遍历等常见操作，并且提供了丰富的 API 操作方法，比如 <code v-pre>add()</code>、<code v-pre>remove()</code>等。<code v-pre>Array</code> 只是一个固定长度的数组，只能按照下标访问其中的元素，不具备动态添加、删除元素的能力。</li>
<li><code v-pre>ArrayList</code>创建时不需要指定大小，而<code v-pre>Array</code>创建时必须指定大小。</li>
</ul>
<h3 id="_1-3-arraylist-与-linkedlist-区别" tabindex="-1"><a class="header-anchor" href="#_1-3-arraylist-与-linkedlist-区别"><span>1.3. ArrayList 与 LinkedList 区别</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555787.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>ArrayList 基于动态数组实现，查询操作快。</p>
<p>LinkedList基于双向链表实现，增删操作快。</p>
<details class="lake-collapse"><summary id="u5ec6a050"><span class="ne-text" style="font-size: 16px">array 用的比 linked 更多 </span></summary><p id="u6ee568b3" class="ne-p" style="margin: 0; padding: 0; min-height: 24px"><span class="ne-text" style="font-size: 16px">我们在项目中一般是不会使用到 </span><code class="ne-code" style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; background-color: rgba(0, 0, 0, 0.06); border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 2px; padding: 0px 2px"><span class="ne-text" style="font-size: 16px">LinkedList</span></code><span class="ne-text" style="font-size: 16px"> 的，需要用到 </span><code class="ne-code" style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; background-color: rgba(0, 0, 0, 0.06); border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 2px; padding: 0px 2px"><span class="ne-text" style="font-size: 16px">LinkedList</span></code><span class="ne-text" style="font-size: 16px"> 的场景几乎都可以使用 </span><code class="ne-code" style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; background-color: rgba(0, 0, 0, 0.06); border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 2px; padding: 0px 2px"><span class="ne-text" style="font-size: 16px">ArrayList</span></code><span class="ne-text" style="font-size: 16px"> 来代替，并且，性能通常会更好！就连 </span><code class="ne-code" style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; background-color: rgba(0, 0, 0, 0.06); border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 2px; padding: 0px 2px"><span class="ne-text" style="font-size: 16px">LinkedList</span></code><span class="ne-text" style="font-size: 16px"> 的作者约书亚 · 布洛克（Josh Bloch）自己都说从来不会使用 </span><code class="ne-code" style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; background-color: rgba(0, 0, 0, 0.06); border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 2px; padding: 0px 2px"><span class="ne-text" style="font-size: 16px">LinkedList</span></code><span class="ne-text" style="font-size: 16px"> 。</span></p><p id="u639b5f4e" class="ne-p" style="margin: 0; padding: 0; min-height: 24px"><img src="https://cdn.nlark.com/yuque/0/2024/png/33541132/1729769549577-09684522-be7f-4798-bec3-33c5f8c9a7ca.png" width="1069" id="xlmmH" class="ne-image" style="font-size: 16px"></p><p id="uc57a9cc7" class="ne-p" style="margin: 0; padding: 0; min-height: 24px"><span class="ne-text" style="font-size: 16px">另外，不要下意识地认为 </span><code class="ne-code" style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; background-color: rgba(0, 0, 0, 0.06); border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 2px; padding: 0px 2px"><span class="ne-text" style="font-size: 16px">LinkedList</span></code><span class="ne-text" style="font-size: 16px"> 作为链表就最适合元素增删的场景。我在上面也说了，</span><code class="ne-code" style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace; background-color: rgba(0, 0, 0, 0.06); border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 2px; padding: 0px 2px"><span class="ne-text" style="font-size: 16px">LinkedList</span></code><span class="ne-text" style="font-size: 16px"> 仅仅在头尾插入或者删除元素的时候时间复杂度近似 O(1)，其他情况增删元素的平均时间复杂度都是 O(n) 。</span></p></details>
<h3 id="_1-4-hashset、linkedhashset-和-treeset-异同" tabindex="-1"><a class="header-anchor" href="#_1-4-hashset、linkedhashset-和-treeset-异同"><span>1.4. HashSet、LinkedHashSet 和 TreeSet 异同</span></a></h3>
<ul>
<li><code v-pre>HashSet</code>、<code v-pre>LinkedHashSet</code> 和 <code v-pre>TreeSet</code> 都是 <code v-pre>Set</code> 接口的实现类，都能保证元素唯一，并且都是线程不安全的。</li>
<li><code v-pre>HashSet</code>、<code v-pre>LinkedHashSet</code> 和 <code v-pre>TreeSet</code> 的主要区别在于底层数据结构不同。</li>
</ul>
<p><code v-pre>HashSet</code> 的底层数据结构是哈希表（基于 <code v-pre>HashMap</code> 实现）。<code v-pre>LinkedHashSet</code> 的底层数 	据结构是链表和哈希表，元素的插入和取出顺序满足 FIFO。<code v-pre>TreeSet</code> 底层数据结构是红黑 	树，元素是有序的，排序的方式有自然排序和定制排序。</p>
<ul>
<li>底层数据结构不同又导致这三者的应用场景不同。<code v-pre>HashSet</code> 用于不需要保证元素插入和取出顺序的场景，<code v-pre>LinkedHashSet</code> 用于保证元素的插入和取出顺序满足 FIFO 的场景，<code v-pre>TreeSet</code> 用于支持对元素自定义排序规则的场景。</li>
</ul>
<h3 id="_1-5-hashmap-底层原理" tabindex="-1"><a class="header-anchor" href="#_1-5-hashmap-底层原理"><span>1.5. HashMap 底层原理</span></a></h3>
<p><strong>关键属性：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555788.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>第一个属性  loadFactor，它是负载因子，默认值是0.75，表示扩容前 。</p>
<p>第二个属性  threshold 它是记录HashMap所能容纳的键值对的临界值，它的计算规则是负载因子 × 数组长度，扩容后的容量为当前容量的 2 倍。例如，初始容量为16，当元素数量达到 12 时会触发扩容，扩容后的容量为 32。</p>
<p>第三个属性size，它用来记录HashMap实际存在的键值对的数量。</p>
<p>第四个属性modCount，它用来记录HashMap内部结构修改的次数。</p>
<p>第五个是常量属性DEFAULT_INITIAL_CAPACITY ，它规定的默认容量是16。</p>
<p><strong>存储结构：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555789.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>HashMap采用的是哈希表（散列表）的存储结构。HashMap的数组部分称为Hash桶，数组元素保存在一个叫做table的属性中。当链表长度大于等于8时，链表数据将会以红黑树的形式进行存储，当长度降到6时，又会转成链表形式存储。</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555790.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>每个Node节点，保存了用来定位数组索引位置的hash值、Key、Value和链表指向的下一个Node节点。而Node类是HashMap的内部类，它实现了Map.Entry接口，它的本质其实可以简单的理解成就是一个键值对。</p>
<h3 id="_1-6-concurrenthashmap-和-hashtable-的区别" tabindex="-1"><a class="header-anchor" href="#_1-6-concurrenthashmap-和-hashtable-的区别"><span>1.6. ConcurrentHashMap 和 Hashtable 的区别</span></a></h3>
<p>ConcurrentHashMap 和 Hashtable 的区别主要体现在实现线程安全的方式上不同。</p>
<p>ConcurrentHashMap:</p>
<p>• 底层数据结构： JDK1.7 的 ConcurrentHashMap 底层采用 分段的数组+链表 实现，JDK1.8 采用的数据结构跟 HashMap1.8 的结构一样，数组+链表/红黑二叉树。Hashtable 和 JDK1.8 之前的 HashMap 的底层数据结构类似都是采用 数组+链表 的形式，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的；</p>
<p>• 实现线程安全的方式（重要）：</p>
<p>◦ 在 JDK1.7 的时候，ConcurrentHashMap 对整个桶数组进行了分割分段(Segment，分段锁)，每一把锁只锁容器其中一部分数据（下面有示意图），多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。</p>
<p>◦ 到了 JDK1.8 的时候，ConcurrentHashMap 已经摒弃了 Segment 的概念，而是直接用 Node 数组+链表+红黑树的数据结构来实现，并发控制使用 synchronized 和 CAS 来操作。（JDK1.6 以后 synchronized 锁做了很多优化） 整个看起来就像是优化过且线程安全的 HashMap，虽然在 JDK1.8 中还能看到 Segment 的数据结构，但是已经简化了属性，只是为了兼容旧版本；</p>
<p>Hashtable(同一把锁) :</p>
<p>使用 synchronized 来保证线程安全，效率非常低下。当一个线程访问同步方法时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用 put 添加元素，另一个线程不能使用 put 添加元素，也不能使用 get，竞争会越来越激烈效率越低。</p>
<p>下面，我们再来看看两者底层数据结构的对比图。</p>
<p><strong>Hashtable :</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555791.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>JDK1.7 的 ConcurrentHashMap：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555792.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>Java7 ConcurrentHashMap 存储结构：</strong></p>
<p>ConcurrentHashMap 是由 Segment 数组结构和 HashEntry 数组结构组成。</p>
<p>Segment 数组中的每个元素包含一个 HashEntry 数组，每个 HashEntry 数组属于链表结构。</p>
<p>JDK1.8 的 ConcurrentHashMap：</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555793.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>Java8 ConcurrentHashMap 存储结构：</strong></p>
<p>JDK1.8 的 ConcurrentHashMap 不再是 Segment 数组 + HashEntry 数组 + 链表，而是 Node 数组 + 链表 / 红黑树。不过，Node 只能用于链表的情况，红黑树的情况需要使用 TreeNode。当冲突链表达到一定长度时，链表会转换成红黑树。</p>
<p>TreeNode是存储红黑树节点，被TreeBin包装。TreeBin通过root属性维护红黑树的根结点，因为红黑树在旋转的时候，根结点可能会被它原来的子节点替换掉，在这个时间点，如果有其他线程要写这棵红黑树就会发生线程不安全问题，所以在 ConcurrentHashMap 中TreeBin通过waiter属性维护当前使用这棵红黑树的线程，来防止其他线程的进入。</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> TreeBin</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">K</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">V</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Node</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">K</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">V</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    TreeNode</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">K</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">V</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    volatile</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> TreeNode</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">K</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">V</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> first</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    volatile</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> waiter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    volatile</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> lockState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // values for lockState</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> WRITER </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // set while holding write lock</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> WAITER </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // set when waiting for write lock</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> READER </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // increment value for setting read lock</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-concurrenthashmap-线程安全的具体实现方式-底层具体实现" tabindex="-1"><a class="header-anchor" href="#_1-7-concurrenthashmap-线程安全的具体实现方式-底层具体实现"><span>1.7. ConcurrentHashMap 线程安全的具体实现方式/底层具体实现</span></a></h3>
<p><strong>JDK1.8 之前：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555794.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>Java7 ConcurrentHashMap 存储结构:</p>
<p>首先将数据分为一段一段（这个“段”就是 Segment）的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问。</p>
<p>ConcurrentHashMap 是由 Segment 数组结构和 HashEntry 数组结构组成。</p>
<p>Segment 继承了 ReentrantLock,所以 Segment 是一种可重入锁，扮演锁的角色。HashEntry 用于存储键值对数据。</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Segment</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">K</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">V</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> ReentrantLock</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Serializable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 ConcurrentHashMap 里包含一个 Segment 数组，Segment 的个数一旦初始化就不能改变。 Segment数组的大小默认是 16，也就是说默认可以同时支持 16 个线程并发写。</p>
<p>Segment 的结构和 HashMap 类似，是一种数组和链表结构，一个 Segment 包含一个 HashEntry 数组，每个 HashEntry 是一个链表结构的元素，每个 Segment 守护着一个 HashEntry 数组里的元素，当对 HashEntry 数组的数据进行修改时，必须首先获得对应的 Segment 的锁。也就是说，对同一 Segment 的并发写入会被阻塞，不同 Segment 的写入是可以并发执行的。</p>
<p><strong>JDK1.8 之后：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555795.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>Java8 ConcurrentHashMap 存储结构：</p>
<p>Java 8 几乎完全重写了 <code v-pre>ConcurrentHashMap</code>，代码量从原来 Java 7 中的 1000 多行，变成了现在的 6000 多行。</p>
<p><code v-pre>ConcurrentHashMap</code> 取消了 <code v-pre>Segment</code> 分段锁，采用 <code v-pre>Node + CAS + synchronized</code> 来保证并发安全。数据结构跟 <code v-pre>HashMap</code> 1.8 的结构类似，Node 数组+链表/红黑二叉树。Java 8 在链表长度超过一定阈值（8）时将链表（寻址时间复杂度为 O(N)）转换为红黑树（寻址时间复杂度为 O(log(N))）。</p>
<p>Java 8 中，锁粒度更细，<code v-pre>synchronized</code> 只锁定当前链表或红黑二叉树的首节点，这样只要 hash 不冲突，就不会产生并发，就不会影响其他 Node 的读写，效率大幅提升。</p>
<h3 id="_1-8-jdk-1-7-和-jdk-1-8-的-concurrenthashmap-实现有什么不同" tabindex="-1"><a class="header-anchor" href="#_1-8-jdk-1-7-和-jdk-1-8-的-concurrenthashmap-实现有什么不同"><span>1.8. JDK 1.7 和 JDK 1.8 的 ConcurrentHashMap 实现有什么不同？</span></a></h3>
<ul>
<li><strong>线程安全实现方式</strong>：JDK 1.7 采用 <code v-pre>Segment</code> 分段锁来保证安全， <code v-pre>Segment</code> 是继承自 <code v-pre>ReentrantLock</code>。JDK1.8 放弃了 <code v-pre>Segment</code> 分段锁的设计，采用 <code v-pre>Node + CAS + synchronized</code> 保证线程安全，锁粒度更细，<code v-pre>synchronized</code> 只锁定当前链表或红黑二叉树的首节点。</li>
<li><strong>Hash 碰撞解决方法</strong> : JDK 1.7 采用拉链法，JDK1.8 采用拉链法结合红黑树（链表长度超过一定阈值（8）时，将链表转换为红黑树）。</li>
<li><strong>并发度</strong>：JDK 1.7 最大并发度是 Segment 的个数，默认是 16。JDK 1.8 最大并发度是 Node 数组的大小，并发度更大。</li>
</ul>
<h2 id="三、并发" tabindex="-1"><a class="header-anchor" href="#三、并发"><span>三、并发</span></a></h2>
<h3 id="_1-线程和进程的区别" tabindex="-1"><a class="header-anchor" href="#_1-线程和进程的区别"><span>1.  线程和进程的区别</span></a></h3>
<p>进程：</p>
<p>进程是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。</p>
<p>在 Java 中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而 main 函数所在的线程就是这个进程中的一个线程，也称主线程。</p>
<p>如下图所示，在 Windows 中通过查看任务管理器的方式，我们就可以清楚看到 Windows 当前运行的进程（<code v-pre>.exe</code> 文件的运行）。</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555796.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>线程：</p>
<p>线程与进程相似，但线程是一个比进程更小的执行单位。一个进程在其执行的过程中可以产生多个线程。与进程不同的是同类的多个线程共享进程的堆和方法区资源，但每个线程有自己的程序计数器、虚拟机栈和本地方法栈，所以系统在产生一个线程，或是在各个线程之间做切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程。</p>
<p>Java 程序天生就是多线程程序，我们可以通过 JMX 来看看一个普通的 Java 程序有哪些线程，代码如下。</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MultiThread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		// 获取 Java 线程管理 MXBean</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">	ThreadMXBean</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> threadMXBean</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ManagementFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getThreadMXBean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		// 不需要获取同步的 monitor 和 synchronizer 信息，仅获取线程和线程堆栈信息</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">		ThreadInfo</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">threadInfos</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> threadMXBean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dumpAllThreads</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		// 遍历线程信息，仅打印线程 ID 和线程名称信息</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">ThreadInfo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> threadInfo</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> threadInfos) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">			System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"["</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> threadInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getThreadId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "] "</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> threadInfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getThreadName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">		}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述程序输出如下（输出内容可能不同，不用太纠结下面每个线程的作用，只用知道 main 线程执行 main 方法即可）：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">] </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Attach</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> Listener </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//添加事件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">] </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Signal</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> Dispatcher </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 分发处理给 JVM 信号的线程</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">] Finalizer </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//调用对象 finalize 方法的线程</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">] </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Reference</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> Handler </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//清除 reference 线程</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">] main </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">//main 线程,程序入口</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出内容可以看出：一个 Java 程序的运行是 main 线程和多个其他线程同时运行。</p>
<p>下图是 Java 内存区域，通过下图我们从 JVM 的角度来说一下线程和进程之间的关系。</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555797.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>Java 运行时数据区域（JDK1.8 之后）从上图可以看出：一个进程中可以有多个线程，多个线程共享进程的堆和方法区 (JDK1.8 之后的元空间)资源，但是每个线程有自己的程序计数器、虚拟机栈 和 本地方法栈。</p>
<p>总结：线程是进程划分成的更小的运行单位。线程和进程最大的不同在于基本上各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响。线程执行开销小，但不利于资源的管理和保护；而进程正相反。</p>
<h3 id="_2-创建线程的方式" tabindex="-1"><a class="header-anchor" href="#_2-创建线程的方式"><span>2. 创建线程的方式</span></a></h3>
<ol>
<li>继承 Thread 类：</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 定义一个继承自 Thread 类的线程类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MyThread</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 线程执行的代码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Thread running"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 创建线程实例，并启动线程</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        MyThread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> thread</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> MyThread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>实现 Runnable 接口：</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 定义一个实现 Runnable 接口的线程类</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MyRunnable</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Runnable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 线程执行的代码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Thread running"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 创建线程实例，并启动线程</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        MyRunnable</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> runnable</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> MyRunnable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> thread</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(runnable);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>使用匿名内部类：</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> thread</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Runnable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">                // 线程执行的代码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">                System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Thread running"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        });</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>使用 Lambda 表达式：</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> thread</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Thread running"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-线程的生命周期和状态" tabindex="-1"><a class="header-anchor" href="#_3-线程的生命周期和状态"><span>3. 线程的生命周期和状态</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555798.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>• NEW: 初始状态，线程被创建出来但没有被调用 start() 。</p>
<p>• RUNNABLE: 运行状态，线程被调用了 start()等待运行的状态。</p>
<p>• BLOCKED：阻塞状态，需要等待锁释放。</p>
<p>• WAITING：等待状态，线程进入等待状态，直到其他线程显式地唤醒它。线程可以调用 Object 类的 wait()方法、join()方法或 Lock 类的条件等待方法进入此状态。</p>
<p>• TIME_WAITING：超时等待状态，可以在指定的时间后自行返回而不是像 WAITING 那样一直等待。</p>
<p>• TERMINATED：终止状态，表示该线程已经运行完毕。</p>
<h3 id="_4-线程上下文切换" tabindex="-1"><a class="header-anchor" href="#_4-线程上下文切换"><span>4. 线程上下文切换</span></a></h3>
<p>线程在执行过程中会有自己的运行条件和状态（也称上下文），比如上文所说到过的程序计数器，栈信息等。当出现如下情况的时候，线程会从占用 CPU 状态中退出。</p>
<p>• 主动让出 CPU，比如调用了 sleep(), wait() 等。</p>
<p>• 时间片用完，因为操作系统要防止一个线程或者进程长时间占用 CPU 导致其他线程或者进程饿死。</p>
<p>• 调用了阻塞类型的系统中断，比如请求 IO，线程被阻塞。</p>
<p>• 被终止或结束运行</p>
<p>这其中前三种都会发生线程切换，线程切换意味着需要保存当前线程的上下文，等待线程下次占用 CPU 的时候恢复现场，并加载下一个将要占用 CPU 的线程上下文。这就是所谓的上下文切换。</p>
<h3 id="_5-sleep-和-wait-方法对比" tabindex="-1"><a class="header-anchor" href="#_5-sleep-和-wait-方法对比"><span>5. sleep() 和 wait() 方法对比</span></a></h3>
<p>共同点：两者都可以暂停线程的执行。</p>
<p>区别：</p>
<p>• sleep() 方法没有释放锁，而 wait() 方法释放了锁 。</p>
<p>• wait() 通常被用于线程间交互/通信，sleep()通常被用于暂停执行。</p>
<p>• wait() 方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的 notify()或者 notifyAll() 方法。| sleep()方法执行完成后，线程会自动苏醒，或者也可以使用 wait(long timeout) 超时后线程会自动苏醒。</p>
<p>• sleep() 是 Thread 类的静态本地方法，wait() 则是 Object 类的本地方法。</p>
<h3 id="_6-并发与并行的区别" tabindex="-1"><a class="header-anchor" href="#_6-并发与并行的区别"><span>6. 并发与并行的区别</span></a></h3>
<ul>
<li><strong>并发</strong>：两个及两个以上的作业在同一 <strong>时间段</strong> 内执行。</li>
<li><strong>并行</strong>：两个及两个以上的作业在同一 <strong>时刻</strong> 执行。</li>
</ul>
<p>最关键的点是：是否是 <strong>同时</strong> 执行。</p>
<h3 id="_7-同步和异步的区别" tabindex="-1"><a class="header-anchor" href="#_7-同步和异步的区别"><span>7. 同步和异步的区别</span></a></h3>
<ul>
<li><strong>同步</strong>：发出一个调用之后，在没有得到结果之前， 该调用就不可以返回，一直等待。</li>
<li><strong>异步</strong>：调用在发出之后，不用等待返回结果，该调用直接返回。</li>
</ul>
<h3 id="_8-线程调度方式" tabindex="-1"><a class="header-anchor" href="#_8-线程调度方式"><span>8. 线程调度方式</span></a></h3>
<ul>
<li><strong>抢占式调度（Preemptive Scheduling）</strong>：操作系统决定何时暂停当前正在运行的线程，并切换到另一个线程执行。这种切换通常是由系统时钟中断（时间片轮转）或其他高优先级事件（如 I/O 操作完成）触发的。这种方式存在上下文切换开销，但公平性和 CPU 资源利用率较好，不易阻塞。</li>
<li><strong>协同式调度（Cooperative Scheduling）</strong>：线程执行完毕后，主动通知系统切换到另一个线程。这种方式可以减少上下文切换带来的性能开销，但公平性较差，容易阻塞。</li>
</ul>
<p>Java 使用的线程调度是抢占式的。也就是说，JVM 本身不负责线程的调度，而是将线程的调度委托给操作系统。操作系统通常会基于线程优先级和时间片来调度线程的执行，高优先级的线程通常获得 CPU 时间片的机会更多。</p>
<h3 id="_9-死锁" tabindex="-1"><a class="header-anchor" href="#_9-死锁"><span>9. 死锁</span></a></h3>
<p><a href="https://javaguide.cn/java/concurrent/java-concurrent-questions-01.html" target="_blank" rel="noopener noreferrer">Java并发常见面试题总结（上）</a></p>
<p>线程死锁描述的是这样一种情况：多个线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于线程被无限期地阻塞，因此程序不可能正常终止。</p>
<p>死锁的四个必要条件：</p>
<ol>
<li>互斥条件：该资源任意一个时刻只由一个线程占用。</li>
<li>请求与保持条件：一个线程因请求资源而阻塞时，对已获得的资源保持不放。</li>
<li>不剥夺条件：线程已获得的资源在未使用完之前不能被其他线程强行剥夺，只有自己使用完毕后才释放资源。</li>
<li>循环等待条件：若干线程之间形成一种头尾相接的循环等待资源关系。</li>
</ol>
<h3 id="_10-jmm" tabindex="-1"><a class="header-anchor" href="#_10-jmm"><span>10. JMM</span></a></h3>
<p>Java虚拟机规范中定义了Java内存模型（Java Memory Model，JMM），用于屏蔽掉各种硬件和操作系统的内存访问差异，以实现让Java程序在各种平台下都能达到一致的并发效果。</p>
<p>JMM规范了Java虚拟机与计算机内存是如何协同工作的：规定了一个线程如何和何时可以看到由其他线程修改过后的共享变量的值，以及在必须时如何同步的访问共享变量。</p>
<p>JMM描述的是一种抽象的概念，一组规则，通过这组规则控制程序中各个变量在共享数据区域和私有数据区域的访问方式，JMM是围绕原子性、有序性、可见性展开的。它描述了主内存与工作内存的交互操作，如：lock、unlock、read、load、use、assign、store和write，并设定了这些操作的执行规则，以保证并发程序的正确性。</p>
<h3 id="_11-可见性" tabindex="-1"><a class="header-anchor" href="#_11-可见性"><span>11. 可见性</span></a></h3>
<p>一个线程修改了共享变量的值，其他线程能够看到修改的值。</p>
<p>Java内存模型是通过在变量修改后将新值同步回主内存，在变量读取前从主内存刷新变量值这种依赖主内存作为传递媒介的方法来实现可见性的。</p>
<p>如何保证可见性</p>
<p>通过 volatile 关键字保证可见性。</p>
<p>通过 内存屏障 保证可见性。</p>
<p>通过 synchronized 关键字保证可见性。</p>
<p>通过 Lock 保证可见性。</p>
<p>通过 final 关键字保证可见性</p>
<h3 id="_12-有序性" tabindex="-1"><a class="header-anchor" href="#_12-有序性"><span>12. 有序性</span></a></h3>
<p>程序执行的顺序按照代码的先后顺序执行。JVM 存在指令重排，所以存在有序性问题。</p>
<p>如何保证有序性</p>
<p>通过 volatile 关键字保证有序性。</p>
<p>通过 内存屏障保证有序性。</p>
<p>通过 synchronized 关键字保证有序性。</p>
<p>通过 Lock 保证有序性。</p>
<h3 id="_13-原子性" tabindex="-1"><a class="header-anchor" href="#_13-原子性"><span>13. 原子性</span></a></h3>
<p>一个或多个操作，要么全部执行且在执行过程中不被任何因素打断，要么全部不执行。</p>
<p>在 Java中，对基本数据类型的变量的读取和赋值操作是原子性操作（64位处理器）。不采取任何的原子性保障措施的自增操作并不是原子性的。</p>
<p>如何保证原子性</p>
<p>通过 synchronized 关键字保证原子性。</p>
<p>通过 Lock 保证原子性。</p>
<p>通过 CAS 保证原子性。</p>
<h3 id="_14-cas" tabindex="-1"><a class="header-anchor" href="#_14-cas"><span>14. <a href="https://blog.csdn.net/u012581020/article/details/132165800" target="_blank" rel="noopener noreferrer">CAS</a></span></a></h3>
<p>CAS（Compare and Swap）比较与交换是一种并发编程中常用的技术，用于解决多线程环境下的并发访问问题。CAS操作是一种原子操作，它可以提供线程安全，避免了使用传统锁机制所带来的性能开销。</p>
<p>实现线程安全的并发控制：CAS操作可以保证在多线程环境中对共享数据进行原子性的读写操作，从而避免了多线程并发访问时可能引发的数据不一致问题。它提供了一种基于硬件层面的并发控制机制。</p>
<p>提高性能和可伸缩性：相比于传统的锁机制，CAS操作<strong>不需要</strong>阻塞线程或切换上下文，因为它是一种乐观锁机制。这使得CAS在高并发场景下具有更好的性能和可伸缩性，尤其适用于细粒度的并发控制。</p>
<p>解决ABA问题：CAS操作使用期望值来判断共享数据是否被修改过，但它无法检测到共享数据在操作过程中经历了多次修改，然后又回到了期望值的情况，即ABA问题。为了解决ABA问题，可以使用版本号、引用更新等技术。</p>
<p>支持无锁算法：CAS操作可以用于实现一些无锁算法，如非阻塞数据结构和并发容器。无锁算法可以避免线程间的竞争和阻塞，提高程序的吞吐量和效率。</p>
<p>并发数据结构中的应用：CAS操作在并发数据结构中得到广泛应用，如高性能队列、计数器、散列表等。它可以保证多个线程同时对共享数据进行读写时的一致性和正确性。</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555799.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555800.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_15-volatile-关键字" tabindex="-1"><a class="header-anchor" href="#_15-volatile-关键字"><span>15. volatile 关键字</span></a></h3>
<ol>
<li>volatile保证了可见性、有序性</li>
<li>volatile不支持原子性，适用于读多写少的场景</li>
</ol>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555801.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>实现可见性：</p>
<p><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555802.png" alt="img" loading="lazy"><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555803.png" alt="img" loading="lazy"></p>
<p>实现有序性：</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555804.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>使用场景</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555805.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_16-synchronized-关键字" tabindex="-1"><a class="header-anchor" href="#_16-synchronized-关键字"><span>16. synchronized 关键字</span></a></h3>
<p><code v-pre>synchronized</code> 是 Java 中的一个关键字，翻译成中文是同步的意思，主要解决的是多个线程之间访问资源的同步性，可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。</p>
<p>保证原子性：</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555806.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555807.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>底层原理：</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555808.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> StockSample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 商品的库存一共十万件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> stockCount </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        //模拟一直在进行卖出，每卖出一件将对商品的库存减1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i++){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            stockCount--;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[]</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        StockSample</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> sample</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> StockSample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 线程1</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> t1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            sample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        });</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 线程2</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> t2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            sample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        });</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            // 等待两个线程执行结束</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(stockCount);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">            InterruptedException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printStackTrace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法：</p>
<ol>
<li>修饰一个实例的方法</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> StockSample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 商品的库存一共十万件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> stockCount </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> synchronized</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        //模拟一直在进行卖出，每卖出一件将对商品的库存减1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i++){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            stockCount--;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[]</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        StockSample</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> sample</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> StockSample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 线程1</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> t1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            sample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        });</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 线程2</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> t2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            sample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        });</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            // 等待两个线程执行结束</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(stockCount);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">            InterruptedException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printStackTrace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>修饰一个类方法</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> StockSample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 商品的库存一共十万件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> stockCount </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> synchronized</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        //模拟一直在进行卖出，每卖出一件将对商品的库存减1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i++){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            stockCount--;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[]</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // StockSample sample = new StockSample();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 线程1</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> t1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            StockSample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        });</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 线程2</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> t2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            StockSample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        });</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            // 等待两个线程执行结束</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(stockCount);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">                InterruptedException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printStackTrace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>修饰一个代码块</li>
</ol>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> StockSample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 商品的库存一共十万件</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> stockCount </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // private static volatile int value;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // get value</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        synchronized</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            // 模拟一直在进行卖出，每卖出一件将对商品的库存减1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                stockCount--;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // StockSample sample = new StockSample();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 线程1</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> t1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            sample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        });</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // 线程2</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Thread</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> t2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            sample</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">deduct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        });</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            // 等待两个线程执行结束</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            t1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            t2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(stockCount);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">                InterruptedException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">            e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printStackTrace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化：</p>
<p>在 Java 6 之后， <code v-pre>synchronized</code> 引入了大量的优化如自旋锁、适应性自旋锁、锁消除、锁粗化、偏向锁、轻量级锁等技术来减少锁操作的开销，这些优化让 <code v-pre>synchronized</code> 锁的效率提升了很多。因此， <code v-pre>synchronized</code> 还是可以在实际项目中使用的，像 JDK 源码、很多开源框架都大量使用了 <code v-pre>synchronized</code> 。</p>
<p>关于偏向锁多补充一点：由于偏向锁增加了 JVM 的复杂性，同时也并没有为所有应用都带来性能提升。因此，在 JDK15 中，偏向锁被默认关闭（仍然可以使用 <code v-pre>-XX:+UseBiasedLocking</code> 启用偏向锁），在 JDK18 中，偏向锁已经被彻底废弃（无法通过命令行打开）。</p>
<h3 id="_17-synchronized-和-volatile-区别" tabindex="-1"><a class="header-anchor" href="#_17-synchronized-和-volatile-区别"><span>17. synchronized 和 volatile 区别</span></a></h3>
<ul>
<li><code v-pre>volatile</code> 关键字是线程同步的轻量级实现，<code v-pre>synchronized</code>关键字是线程同步的重量级实现。</li>
<li><code v-pre>volatile</code> 关键字只能用于变量而，<code v-pre>synchronized</code> 关键字可以修饰方法以及代码块 。</li>
<li><code v-pre>volatile</code> 关键字能保证数据的可见性，<code v-pre>synchronized</code> 关键字能保证数据的可见性和原子性。</li>
<li><code v-pre>volatile</code>关键字主要用于解决变量在多个线程之间的可见性，而 <code v-pre>synchronized</code> 关键字解决的是多个线程之间访问资源的同步性。</li>
</ul>
<h3 id="_18-aqs" tabindex="-1"><a class="header-anchor" href="#_18-aqs"><span>18. AQS</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555809.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>竞争锁：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555810.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>可重入锁：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555811.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>释放锁：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555812.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555813.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_19-reentrantlock" tabindex="-1"><a class="header-anchor" href="#_19-reentrantlock"><span>19. ReentrantLock</span></a></h3>
<p><code v-pre>ReentrantLock</code> 实现了 <code v-pre>Lock</code> 接口，是一个可重入且独占式的锁，和 <code v-pre>synchronized</code> 关键字类似。不过，<code v-pre>ReentrantLock</code> 更灵活、更强大，增加了轮询、超时、中断、公平锁和非公平锁等高级功能。</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> ReentrantLock</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Lock</span><span style="--shiki-light:#C18401;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E06C75"> java.io.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Serializable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>ReentrantLock</code> 里面有一个内部类 <code v-pre>Sync</code>，<code v-pre>Sync</code> 继承 AQS（<code v-pre>AbstractQueuedSynchronizer</code>），添加锁和释放锁的大部分操作实际上都是在 <code v-pre>Sync</code> 中实现的。<code v-pre>Sync</code> 有公平锁 <code v-pre>FairSync</code> 和非公平锁 <code v-pre>NonfairSync</code> 两个子类。</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555814.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><code v-pre>ReentrantLock</code> 默认使用非公平锁，也可以通过构造器来显式的指定使用公平锁。</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 传入一个 boolean 值，true 时为公平锁，false 时为非公平锁</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ReentrantLock</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">boolean</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> fair) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">sync </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> fair </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> FairSync</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">:</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> NonfairSync</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-公平锁和非公平锁的区别" tabindex="-1"><a class="header-anchor" href="#_20-公平锁和非公平锁的区别"><span>20. 公平锁和非公平锁的区别</span></a></h3>
<ul>
<li><strong>公平锁</strong> : 锁被释放之后，先申请的线程先得到锁。性能较差一些，因为公平锁为了保证时间上的绝对顺序，上下文切换更频繁。</li>
<li><strong>非公平锁</strong>：锁被释放之后，后申请的线程可能会先获取到锁，是随机或者按照其他优先级排序的。性能更好，但可能会导致某些线程永远无法获取到锁。</li>
</ul>
<h3 id="_21-synchronized-和-lock-的区别" tabindex="-1"><a class="header-anchor" href="#_21-synchronized-和-lock-的区别"><span>21. synchronized 和 lock 的区别</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555815.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>synchronized 是 Java 关键字，是内置的同步机制，能修饰方法或代码块，锁的获取是隐式的，底层实现原理是基于 JVM内置监视器锁；</p>
<p>Lock 是一个接口，提供更灵活的同步机制，可以手动控制锁的获取和释放，底层实现可以是 ReentrantLock 等，性能在高竞争环境下通常较好。</p>
<h3 id="_22-synchronized-和-reentrantlock-对比" tabindex="-1"><a class="header-anchor" href="#_22-synchronized-和-reentrantlock-对比"><span>22. synchronized 和 ReentrantLock 对比</span></a></h3>
<p><strong>两者都是可重入锁：</strong></p>
<p><strong>可重入锁</strong> 也叫递归锁，指的是线程可以再次获取自己的内部锁。比如一个线程获得了某个对象的锁，此时这个对象锁还没有释放，当其再次想要获取这个对象的锁的时候还是可以获取的，如果是不可重入锁的话，就会造成死锁。</p>
<p>JDK 提供的所有现成的 <code v-pre>Lock</code> 实现类，包括 <code v-pre>synchronized</code> 关键字锁都是可重入的。</p>
<p>在下面的代码中，<code v-pre>method1()</code> 和 <code v-pre>method2()</code>都被 <code v-pre>synchronized</code> 关键字修饰，<code v-pre>method1()</code>调用了<code v-pre>method2()</code>。</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> SynchronizedDemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> synchronized</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> method1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"方法1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        method2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> synchronized</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> method2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"方法2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 <code v-pre>synchronized</code>锁是可重入的，同一个线程在调用<code v-pre>method1()</code> 时可以直接获得当前对象的锁，执行 <code v-pre>method2()</code> 的时候可以再次获取这个对象的锁，不会产生死锁问题。假如<code v-pre>synchronized</code>是不可重入锁的话，由于该对象的锁已被当前线程所持有且无法释放，这就导致线程在执行 <code v-pre>method2()</code>时获取锁失败，会出现死锁问题。</p>
<p><strong>synchronized</strong> <strong>依赖于</strong> <strong>JVM</strong> <strong>而</strong> <strong>ReentrantLock</strong> <strong>依赖于</strong> <strong>API：</strong></p>
<p><code v-pre>synchronized</code> 是依赖于 JVM 实现的，前面我们也讲到了 虚拟机团队在 JDK1.6 为 <code v-pre>synchronized</code> 关键字进行了很多优化，但是这些优化都是在虚拟机层面实现的，并没有直接暴露给我们。</p>
<p><code v-pre>ReentrantLock</code> 是 JDK 层面实现的（也就是 API 层面，需要 lock() 和 unlock() 方法配合 try/finally 语句块来完成），所以我们可以通过查看它的源代码，来看它是如何实现的。</p>
<p><strong>ReentrantLock 比 synchronized 增加了一些高级功能：</strong></p>
<ul>
<li><strong>等待可中断</strong> : <code v-pre>ReentrantLock</code>提供了一种能够中断等待锁的线程的机制，通过 <code v-pre>lock.lockInterruptibly()</code> 来实现这个机制。也就是说正在等待的线程可以选择放弃等待，改为处理其他事情。</li>
<li><strong>可实现公平锁</strong> : <code v-pre>ReentrantLock</code>可以指定是公平锁还是非公平锁。而<code v-pre>synchronized</code>只能是非公平锁。所谓的公平锁就是先等待的线程先获得锁。<code v-pre>ReentrantLock</code>默认情况是非公平的，可以通过 <code v-pre>ReentrantLock</code>类的<code v-pre>ReentrantLock(boolean fair)</code>构造方法来指定是否是公平的。</li>
<li><strong>可实现选择性通知（锁可以绑定多个条件）</strong>: <code v-pre>synchronized</code>关键字与<code v-pre>wait()</code>和<code v-pre>notify()</code>/<code v-pre>notifyAll()</code>方法相结合可以实现等待/通知机制。<code v-pre>ReentrantLock</code>类当然也可以实现，但是需要借助于<code v-pre>Condition</code>接口与<code v-pre>newCondition()</code>方法。</li>
</ul>
<h3 id="_23-可中断锁和不可中断锁的区别" tabindex="-1"><a class="header-anchor" href="#_23-可中断锁和不可中断锁的区别"><span>23. 可中断锁和不可中断锁的区别</span></a></h3>
<ul>
<li><strong>可中断锁</strong>：获取锁的过程中可以被中断，不需要一直等到获取锁之后 才能进行其他逻辑处理。<code v-pre>ReentrantLock</code> 就属于是可中断锁。</li>
<li><strong>不可中断锁</strong>：一旦线程申请了锁，就只能等到拿到锁以后才能进行其他的逻辑处理。 <code v-pre>synchronized</code> 就属于是不可中断锁。</li>
</ul>
<h3 id="_24-atomic-原子类" tabindex="-1"><a class="header-anchor" href="#_24-atomic-原子类"><span>24. <a href="https://javaguide.cn/java/concurrent/atomic-classes.html#atomic-%E5%8E%9F%E5%AD%90%E7%B1%BB%E4%BB%8B%E7%BB%8D" target="_blank" rel="noopener noreferrer">Atomic 原子类</a></span></a></h3>
<p>原子类简单来说就是具有原子性操作特征的类。</p>
<p><code v-pre>java.util.concurrent.atomic</code> 包中的 <code v-pre>Atomic</code> 原子类提供了一种线程安全的方式来操作单个变量。</p>
<p><code v-pre>Atomic</code> 类依赖于 CAS（Compare-And-Swap，比较并交换）乐观锁来保证其方法的原子性，而不需要使用传统的锁机制（如 <code v-pre>synchronized</code> 块或 <code v-pre>ReentrantLock</code>）。</p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555816.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_25-threadlocal-原理" tabindex="-1"><a class="header-anchor" href="#_25-threadlocal-原理"><span>25. ThreadLocal 原理</span></a></h3>
<p>通常情况下，我们创建的变量是可以被任何一个线程访问并修改的。<strong>如果想实现<strong><strong>每一个线程都有自己的专属本地变量</strong></strong>该如何解决呢？</strong></p>
<p>JDK 中自带的<code v-pre>ThreadLocal</code>类正是为了解决这样的问题。 <code v-pre>**ThreadLocal**</code><strong>类主要解决的就是让<strong><strong>每个线程绑定自己的值</strong></strong>，可以将</strong><code v-pre>**ThreadLocal**</code><strong>类形象的比喻成存放数据的盒子，盒子中可以存储每个线程的私有数据</strong>**。**</p>
<p>如果你创建了一个<code v-pre>ThreadLocal</code>变量，那么访问这个变量的每个线程都会有这个变量的本地副本，这也是<code v-pre>ThreadLocal</code>变量名的由来。他们可以使用 <code v-pre>get()</code> 和 <code v-pre>set()</code> 方法来获取默认值或将其值更改为当前线程所存的副本的值，从而避免了线程安全问题。</p>
<p>再举个简单的例子：两个人去宝屋收集宝物，这两个共用一个袋子的话肯定会产生争执，但是给他们两个人每个人分配一个袋子的话就不会出现这样的问题。如果把这两个人比作线程的话，那么 ThreadLocal 就是用来避免这两个线程竞争的。</p>
<h3 id="_26-threadlocal-内存泄露" tabindex="-1"><a class="header-anchor" href="#_26-threadlocal-内存泄露"><span>26. ThreadLocal 内存泄露</span></a></h3>
<p><code v-pre>ThreadLocalMap</code> 中使用的 key 为 <code v-pre>ThreadLocal</code> 的弱引用，而 value 是强引用。</p>
<p><code v-pre>ThreadLocal</code> 在没有被外部强引用的情况下，在垃圾回收的时候，key 会被清理掉，而 value 不会被清理掉。</p>
<p>这样一来，<code v-pre>ThreadLocalMap</code> 中就会出现 key 为 null 的 Entry。假如我们不做任何措施的话，value 永远无法被 GC 回收，这个时候就可能会产生内存泄露。<code v-pre>ThreadLocalMap</code> 实现中已经考虑了这种情况，在调用 <code v-pre>set()</code>、<code v-pre>get()</code>、<code v-pre>remove()</code> 方法的时候，会清理掉 key 为 null 的记录。使用完 <code v-pre>ThreadLocal</code>方法后最好手动调用<code v-pre>remove()</code>方法。</p>
<h3 id="_27-线程池的核心参数" tabindex="-1"><a class="header-anchor" href="#_27-线程池的核心参数"><span>27. 线程池的核心参数</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ThreadPoolExecutor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> corePoolSize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 线程池的核心线程数量</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">                          int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> maximumPoolSize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 线程池的最大线程数</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">                          long</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> keepAliveTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 当线程数大于核心线程数时，多余的空闲线程存活的最长时间</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">                          TimeUnit</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> unit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 时间单位</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">                          BlockingQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">Runnable</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> workQueue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 任务队列，用来储存等待执行任务的队列</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">                          ThreadFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> threadFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 线程工厂，用来创建线程，一般默认即可</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">                          RejectedExecutionHandler</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> handle) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 拒绝策略，当提交的任务过多而不能及时处理时，我们可以定制策略来处理任务</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_28-线程池的创建" tabindex="-1"><a class="header-anchor" href="#_28-线程池的创建"><span>28. 线程池的创建</span></a></h3>
<p><strong>方式一：</strong><code v-pre>**ThreadPoolExecutor**</code><strong>构造函数（推荐）</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555817.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>方式二：spring 的</strong> <code v-pre>**ThreadPoolTaskExecutor** </code></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555818.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>创建线程池需要合理配置线程池的大小、选择适当的任务队列和拒绝策略，正确管理线程池的生命周期，并考虑线程安全性。</p>
<h3 id="_29-线程池工作原理" tabindex="-1"><a class="header-anchor" href="#_29-线程池工作原理"><span>29. 线程池工作原理</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555819.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>线程池刚创建时，里面没有一个线程。任务队列是作为参数传进来的。不过，就算队列里面有任务，线程池也不会马上执行它们。</p>
<p>当调用 execute() 方法添加一个任务时，线程池会做如下判断：</p>
<p> 如果正在运行的线程数量小于 corePoolSize，那么马上创建线程运行这个任务；</p>
<p> 如果正在运行的线程数量大于或等于 corePoolSize，那么将这个任务放入队列；</p>
<p> 如果这时候队列满了，而且正在运行的线程数量小于 maximumPoolSize，那么还是要创建非核心线程立刻运行这个任务；</p>
<p> 如果队列满了，而且正在运行的线程数量大于或等于 maximumPoolSize，那么线程池会抛出异常 RejectExecutionException。</p>
<p>当一个线程完成任务时，它会从队列中取下一个任务来执行。</p>
<p>当一个线程无事可做，超过一定的时间（keepAliveTime）时，线程池会判断，如果当前运行的线程数大于 corePoolSize，那么这个线程就被停掉。所以线程池的所有任务完成后，它最终会收缩到 corePoolSize 的大小。</p>
<h3 id="_30-线程池的拒绝策略" tabindex="-1"><a class="header-anchor" href="#_30-线程池的拒绝策略"><span>30. 线程池的拒绝策略</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555820.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>线程池的拒绝策略有四种：AbortPolicy（默认方式，中止并抛出RejectedExecutionException 异常）、CallerRunsPolicy（使用调用线程来执行被拒绝的任务）、DiscardPolicy（默默地丢弃拒绝的任务）以及 DiscardOldestPolicy（丢弃最早被添加到队列的任务，然后尝试重新提交新任务）。</p>
<p>如果希望快速失败并将异常传递给调用者，则选择 AbortPolicy。如果希望尽可能保证任务的执行</p>
<p>而不堆积在队列中，则选择 CallerRunsPolicy。如果对任务的丢失情况不敏感，则选择DiscardPolicy。而如果希望尽可能保留最新的任务而不是旧的任务，则选择DiscardOldestPolicy。</p>
<h3 id="_31-countdownlatch" tabindex="-1"><a class="header-anchor" href="#_31-countdownlatch"><span>31. CountDownLatch</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555821.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555822.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555823.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_32-cyclicbarrier" tabindex="-1"><a class="header-anchor" href="#_32-cyclicbarrier"><span>32. CyclicBarrier</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555824.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555825.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555826.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_33-countdownlatch-和-cyclicbarrier-区别" tabindex="-1"><a class="header-anchor" href="#_33-countdownlatch-和-cyclicbarrier-区别"><span>33. CountDownLatch 和 CyclicBarrier 区别</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555827.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_34-semaphore" tabindex="-1"><a class="header-anchor" href="#_34-semaphore"><span>34. Semaphore</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555828.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555829.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><strong>Semaphore 模型：</strong></p>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555830.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555832.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_35-arrayblockingqueue" tabindex="-1"><a class="header-anchor" href="#_35-arrayblockingqueue"><span>35. ArrayBlockingQueue</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555833.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_36-linkedbloackingqueue" tabindex="-1"><a class="header-anchor" href="#_36-linkedbloackingqueue"><span>36. LinkedBloackingQueue</span></a></h3>
<figure><img src="https://gcore.jsdelivr.net/gh/Twritetime/imgs@main/20241216212555834.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h3 id="_37-悲观锁和乐观锁的区别" tabindex="-1"><a class="header-anchor" href="#_37-悲观锁和乐观锁的区别"><span>37. <a href="https://javaguide.cn/java/concurrent/optimistic-lock-and-pessimistic-lock.html" target="_blank" rel="noopener noreferrer">悲观锁和乐观锁的区别</a></span></a></h3>
<p>悲观锁：认为自己在使用数据的时候一定有别的线程来修改数据，在获取数据的时候会先加锁，确保数据不会被别的线程修改。</p>
<p>实现：关键字 synchronized、接口 Lock 的实现类</p>
<p>适用场景：写操作较多，先加锁可以保证写操作时数据正确</p>
<p>乐观锁：认为自己使用数据时不会有别的线程修改数据，所以不会添加锁，只是在更新数据的时候去判断之前有没有别的线程更新了这个数据。</p>
<p>实现 ：</p>
<ul>
<li>CAS 算法， CAS 即 Compare And Swap，是一种更新的原子操作，比较当前值跟传入值是否一样，一样则更新，否则返回 false，不进行任何操作；例如：ActomicInteger 类的原子自增是通过 CAS 自选实现。</li>
<li>版本号控制：数据表中加上版本号字段 version，表示数据被修改的次数。当数据被修改时，这个字段值会加 1，提交必  须满足“ 提交版本必须大于记录当前版本才能执行更新“的乐观锁策略。</li>
</ul>
<p>适用场景：读操作较多，不加锁的特点能够使其读操作的性能大幅提升</p>
</div></template>


