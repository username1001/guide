webpackJsonp([0xa19c04275d6],{3632:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Loops of all kinds in C</h1>\n<p>Loops are what you use when you have code that you want to loop, meaning that after it runs, you might want it to loop around to the beginning and run again. There are a few of these in C.</p>\n<h2>While loops</h2>\n<p>The simplest of the bunch are while loops. While loops will run while the condition within the parenthesis is true. They should be used when you want something to happen until a certain condition takes place. Here’s an example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> my_number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>my_number <span class="token operator">!=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token operator">++</span>my_number<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"my_number = %i"</span><span class="token punctuation">,</span> my_number<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>While the statement within the while loop is true, the content within the brackets will be run. When the program hits the <code>while(my_number)</code>, it checks the statement within the parenthesis. If that statement is false, it won’t run the while loop. Instead, it will skip over the code between the two brackets and will pick up where it left off.</p>\n<p>If the statement is true, the code within the brackets will be run. Once the code within the brackets has run, the statement within the parenthesis will be checked again. Just like before, if the statement is true, the code will be run, if it’s false, the code will be skipped.</p>\n<p>Something that you may run into when playing with this or any other loop is the idea of an infinite loop- a loop that will run an infinite amount of times because there’s nothing to stop it. Sometimes this can happen on purpose:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"This will get printed forever unless the program is stopped!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Of course, it can also happen accidentally. Here’s the same code as before, but with a subtle difference that turns it into an infinite loop:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> my_number <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">while</span><span class="token punctuation">(</span>my_number <span class="token operator">!=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token operator">++</span>my_number<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"my_number = %i"</span><span class="token punctuation">,</span> my_number<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>When this while loop is evaluated, <code>my_number</code> will be checked to see if it isn’t 10. It isn’t, because it’s been initialized at 11, so the code within the while loop will run and <code>my_number</code> will be 12. 12 does not equal 10, so the code within the while loop will be run and <code>my_number</code> will be 13. This will keep running forever because this condition will never become false- the only way for it to stop is for the program to be forced to stop running. This is an example of an infinite loop, because if left alone, it will run an infinite amount of times.</p>\n<h2>Do-while loops</h2>\n<p>Do-while loops are a less commonly used version of a while loop. While loops start with an evaluation, so if that evaluation is false, the code within the brackets will not be run. With a do-while loop, however, the code within the brackets gets run once, then the evaluation is performed to see if it should be run again. Here’s a look at that:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">do</span> <span class="token punctuation">{</span>\n        a<span class="token operator">++</span>\n    <span class="token punctuation">}</span> <span class="token keyword">while</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%i\\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If this were a while loop, the code within the brackets would never get run because this condition isn’t true when the evaluation is performed. However, because this is a do-while loop, the code will be performed once, and then the evaluation is done to see if it should be done again. Do-while loops are useful for when you know you want something to be done once, but you may need it to be run additional times after that.</p>\n<h2>For loops</h2>\n<p>For loops are for when we want something to run a set number of times. Here’s an example of that:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span>                                                          </span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> count <span class="token operator">!=</span> b<span class="token punctuation">;</span> count<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        result <span class="token operator">=</span> result <span class="token operator">+</span> a<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a times b is %i\\n"</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Multiplication is just repeated addition, so this is doing addition on <code>a</code>, <code>b</code> times. Let’s a take a look at the <code>for</code> bit in particular:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> count <span class="token operator">!=</span> b<span class="token punctuation">;</span> count<span class="token operator">++</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Unlike the for loop, there are three things in our parenthesis that are separated by semicolons. The first section is for initialization, and is referred to as ‘initialization’: it allows you to make a new variable and set it a value, or set an existing variable to a different value, or you can not set anything and just put a semicolon down.</p>\n<p>The next section is a boolean condition that will be checked for true or false, just like our while loop. It’s referred to as a ‘condition’, because it’s the condition that will get checked before starting a loop.</p>\n<p>The final section is referred to as the ‘increment/decrement’. Its job is to perform some operation every loop - usually adding or subtracting from the initial variable - after the code within the brackets has been run through. In this case, it’s just adding one to the count. This is the most common way for the increment to be used, because it lets you keep count of how many times you’ve run through a for loop.</p>\n<h1>Some Fun and Useful Quirks</h1>\n<h2>Infinite looping with for loops</h2>\n<p>Take a moment to consider what this code will do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"hello, world! \\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>There’s nothing in the initialization section, so nothing has been initialized. That’s fine, and that is done sometimes because you don’t always want or need to initialize anything.</p>\n<p>Next is the condition, which is blank. That’s a little odd. This means that no condition will be tested, so it’s never going to be false, so it will run through the loop, perform the afterthought (which is to do nothing), and then check the condition again, which will make it run again. As you’ve probably realized, this is an infinite loop. As it turns out, this is actually useful. When creating performing an infinite loop, the method of doing <code>while(1)</code> is perfectly legitimate, but performs a comparison every time. <code>for(;;)</code>, on the other hand, does not. For that reason, <code>for(;;)</code> has a legitimate use in that it is a hair more efficient than other methods of infinite looping. Thankfully, many compilers will take care of this for you.</p>\n<h2>Not using brackets</h2>\n<p>Throughout this page, you’ve read that the code ‘within the brackets’ is what gets run, and that’s mostly true. However, what if there are no brackets?</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">while</span><span class="token punctuation">(</span>true<span class="token punctuation">)</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"hello, world! \\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In cases like this, C will treat the next line as the only content that needs to be looped. C ignores whitespace, so that indent is just there for clarity. Only that one line will be treated as though it is in the loop, and this is a property that if statements, for loops, and while loops all share. Because the whitespace is ignored, the placement doesn’t matter: it could be on the same line, the next line, or 300 lines and two spaces down as long as there’s no other lines of code in between. This feature can make your code look a bit cleaner when you only have one line of code to run in a statement.</p>\n<h2>Semicolons instead of brackets</h2>\n<p>If there are no brackets, the compiler will look only at the next line and have that be the content of the loop. Semicolons tell the compiler that a line is over. With these things combined, we can have C wait until something becomes true. Let’s say we have a method called <code>is_button_pressed</code> that returns false if a button is not pressed, and true if a button is pressed:</p>\n<div class="gatsby-highlight">\n      <pre class="language-c"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">is_button_pressed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Nothing happens in this loop, because the only line it will look at is a semicolon. As a result, the <code>is_button_pressed</code> method will be called, and its return value will be evaluated. If the button is not pressed and the return value is false, the <code>!</code> will flip it to true so the function is run again and evaluated again. If the return value is true, the <code>!</code> will flip it to false and the while loop will be exited.</p>\n<p>This has the effect of putting a pause in your code. In this case, the code reached the while loop, and didn’t go any further. Instead, it kept checking for the status of the button to change. This would be useful for when you want nothing to happen until a certain condition has been met.</p>\n<h1>Before you go on…</h1>\n<h2>A review</h2>\n<ul>\n<li>Loops allow your code to be run more than once, when certain conditions are met.</li>\n<li>There are a couple of loops available to us in C:</li>\n<li>While loops, which allow us to run code while a condition is true</li>\n<li>Do-while loops, which run code and then continue running it if a condition is true</li>\n<li>For loops, which run code while a condition is true and allow us to perform an operation every loop.</li>\n</ul>',fields:{slug:"/c/loops/"},frontmatter:{title:"Loops of all kinds"}}},pathContext:{slug:"/c/loops/"}}}});
//# sourceMappingURL=path---c-loops-c0820b7e7205c8d83a8a.js.map