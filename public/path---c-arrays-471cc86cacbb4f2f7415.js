webpackJsonp([0x79897a9d0b64],{3536:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Arrays in C</h1>\n<h2>Problems</h2>\n<p>Before trying to explain what arrays are, let’s look at the code where we want to print 10 numbers given by the user in reverse order.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">,</span> g<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k<span class="token punctuation">;</span>\n    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> \n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment" spellcheck="true">//and so on..</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>So… this looks a bit tedious.<br>Up until now every variable created had some special role. But right now, it would be great if we could just store multiple values in one place and get access to the values with their place in the line maybe (first value, second etc.). Also, we could use loops on them, which are things you will learn about later, but basically they do the same thing over and over again eg. reading from the user, or printing out values. </p>\n<h2>Arrays in C</h2>\n<p>Arrays are containers with a given size. They contain variables of the <strong>same type</strong>. You can access a variable stored in the array with its <em>index</em>.\nLet’s look at some code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> brr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> crr<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">int</span> var <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>And now let’s break the syntax down a bit: </p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Here you have created an <code>array</code> of <code>ints</code>, called <code>arr</code>. This array has 4 elements: <code>1</code>, <code>2</code>, <code>3</code>, <code>88</code>. Note the syntax!</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code>datatype name<span class="token punctuation">[</span>number of elements<span class="token punctuation">]</span> \n</code></pre>\n      </div>\n<p>The first element of this array is <code>1</code>, the second is <code>2</code> etc.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">int</span> brr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You do not have to tell the dimension beforehand. Here an array of two will be created with the elements between the curly brackets.</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">int</span> crr<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>If you do this, then the first element is going to be <code>3</code>, but the rest of them is going to be <code>0</code>. </p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">int</span> var <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Here an int is created called <code>var</code>, and it is initialized to the 0th element of arr. <strong>Very importart to note</strong> that in C, indexes start at zero as opposed to 1. This means that to access the first element, the index (between the brackets) is 0, to access the second element, the index is 1 etc.\nIn this example <code>var</code> is going to store the value <code>1</code>.</p>\n<h2>Strings</h2>\n<p>To store strings/multiple characters, we use <code>char arrays</code> in C, because the language has no special type built in. One thing to be aware of, is that a terminating null is automatically added to the end, signaling that it is the end of the string.</p>\n<p>Like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">char</span> string<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">//here you get Hello\\0, which is why we need an array with the length of 6</span>\n</code></pre>\n      </div>\n<p>Just like with the int arrays in the example above, there are several ways to assign values to char arrays:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">char</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"I do not want to count the chars in this."</span><span class="token punctuation">;</span>\n<span class="token keyword">char</span> string2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">\'C\'</span><span class="token punctuation">,</span><span class="token string">\'h\'</span><span class="token punctuation">,</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'r\'</span><span class="token punctuation">,</span><span class="token string">\' \'</span><span class="token punctuation">,</span><span class="token string">\'b\'</span><span class="token punctuation">,</span><span class="token string">\'y\'</span><span class="token punctuation">,</span><span class="token string">\' \'</span><span class="token punctuation">,</span><span class="token string">\'c\'</span><span class="token punctuation">,</span><span class="token string">\'h\'</span><span class="token punctuation">,</span><span class="token string">\'a\'</span><span class="token punctuation">,</span><span class="token string">\'r\'</span><span class="token punctuation">,</span><span class="token string">\'\\0\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">char</span> string3<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"This is a string"</span>\n                 <span class="token string">"with two lines"</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Typical mistakes, tips</h2>\n<ul>\n<li>\n<p>When you have an array filled with values and you want to make an another array that is exactly the same as the first, never ever do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">double</span> first<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">double</span> second<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> first<span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">//Or this:</span>\n<span class="token keyword">double</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span>\na <span class="token operator">=</span> b<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You can <strong>only</strong> deal with the values in an array one by one. You <strong>cannot assign all at once</strong>, when you learn about pointers later, the reasons will be clear. </p>\n<blockquote>\n<p>(Basically, the first element of an array points to a memory address, and the elements after that are the “houses” next to that first one. So technically an array is just it’s first element’s memory address. When you want to assign the second array the first array, you run into error due to differing types, or you are trying to change the second memory address of the first element in the second array.)</p>\n</blockquote>\n</li>\n<li>\n<p>When you want to create an array, you have to either tell its size, or assign values to it. Do not do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The computer has to know how big of a storage to create for the array. Later on, you will learn about ways to create containers whose size are defined later. (Again, pointers.)</p>\n</li>\n<li>\n<p>When you index out of the array, the compiler is not always going to give you an error. This is called undefined behaviour, we just do not know what is going to happen. It could lead to your program crashing, simply slowing down, anything. </p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">int</span> test<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> a <span class="token operator">=</span> test<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> b <span class="token operator">=</span> test<span class="token punctuation">[</span><span class="token number">89</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The reason for C not checking the indexing bound is simple: C is an efficient language. It was made, so your program is the fastest: communicates nicely with hardware etc. A nicely written C code does not contain indexing errors, so why would C want to check while running? </p>\n</li>\n<li>\n<p>When you try to access the last element of the array. Suppose the length of the array A be 4 and while accessing the last element as\nA[4] will return an error, as the the indexing starts from 0.</p>\n</li>\n</ul>',fields:{slug:"/c/arrays/"},frontmatter:{title:"Arrays"}}},pathContext:{slug:"/c/arrays/"}}}});
//# sourceMappingURL=path---c-arrays-471cc86cacbb4f2f7415.js.map