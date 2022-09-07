/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
  return (
    <header>
      <h1 class={tw`font-bold text-2xl`}>740 Esquire</h1>
      <nav class={tw`py-4 flex space-x-4`}>
        <a href="/">Home</a>
        <a href="/posts">Areas of Practice</a>
        <a href="/hello/you">Our Firm</a>
        <a href="/goodbye/you">Law Journal</a>
        <a href="https://github.com/erictherobot/deno-app-1" target="_blank">
          Github
        </a>
      </nav>
    </header>
  );
}
