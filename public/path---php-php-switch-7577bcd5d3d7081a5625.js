webpackJsonp([0x797476bda3e5],{5890:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>PHP Switch</h2>\n<p>The <code>switch</code> statement in PHP is similar to a series of <code>if</code> statements on same expression. The <code>switch</code> statement is used to execute different actions at different conditions. The Syntax of the <code>switch</code> statement is follows</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>switch (expression) {\n\n    case label1:\n        // code block to be executed if there is a match with result of expression\n        break;      \n    case label2:\n        // code block to be executed if there is a match with result of expression\n        break;\n    case label3:\n        // code block to be executed if there is a match with result of expression\n        break;\n    default:\n        // code block to be executed if there is no match with result of expression\n\n}</code></pre>\n      </div>\n<p>When we run the program , the expression inside the <code>switch</code> statement is evaluated. The result of that expression is checked with corresponding labels if there is a match then corresponding <code>case</code> block is executed.  If no match is found with any of the case statements, only the block of code following the <code>default</code> are executed. </p>\n<p>Illustration of <code>switch</code> statement with an example</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\n\n$i = 1\nswitch ($i) {\n    case 0:\n        echo "i equals 0";\n        break;\n    case 1:\n        echo "i equals 1";\n        break;\n    case 2:\n        echo "i equals 2";\n        break;\n}\n\n?></code></pre>\n      </div>\n<p>The <code>switch</code> statement can also be used without <code>break</code> statement. In that case , statements after the matched cases will be executed. Below is an usage of <code>switch</code> statement without <code>break</code> statement.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><?php\nswitch ($i) {\n    case 0:\n        echo "i equals 0";\n    case 1:\n        echo "i equals 1";\n    case 2:\n        echo "i equals 2";\n}\n?>\n\n/*output --> i equals 0i equals 1i equals 2 */</code></pre>\n      </div>\n<h4>More Information:</h4>\n<p><a href="http://php.net/manual/en/control-structures.switch.php">Switch Statement - PHP Documentation</a></p>\n<p><a href="https://www.w3schools.com/php/php_switch.asp">PHP5 Switch - W3Schools</a></p>',fields:{slug:"/php/php-switch/"},frontmatter:{title:"PHP Switch"}}},pathContext:{slug:"/php/php-switch/"}}}});
//# sourceMappingURL=path---php-php-switch-7577bcd5d3d7081a5625.js.map