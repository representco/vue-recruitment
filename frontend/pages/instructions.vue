<template>
  <div class="container mx-auto py-10">
    <div class="text-roboto">
      <div class="mb-10">
        <h1 class="text-2xl text-blue font-bold">Task</h1>
        <p>Create 2 reusable components</p>
        <ul class="list-disc list-inside">
          <li>
            <a href="#mobileAccordion" class="text-blue underline"
              >Mobile accordion</a
            >
          </li>
          <li>
            <a href="#multiColumnLayout" class="text-blue underline"
              >Multi column content</a
            >
          </li>
        </ul>
        <p>
          Both components should be content agnostic since we will use them in
          different scenarios.
        </p>

        <p>
          For this excercise styles are not important, but tailwind is
          configured with the given breakpooints and colors. You can use
        </p>
        <ul class="list-disc list-inside">
          <li>
            <span class="font-bold italic text-blue">text-blue</span> for the
            blue text
          </li>
          <li>
            <span class="font-bold italic text-offblack">text-offblack</span>
            for the black text
          </li>
        </ul>
      </div>

      <div id="mobileAccordion" class="mb-10">
        <h2 class="text-lg font-bold">Mobile accordion</h2>
        <p>
          Behaves as accordion on mobile (until <strong>md</strong> breakpoint).
          On desktop this component no longer behaves as an accordion, but
          instead it shows all the content expanded.
        </p>
        <p>
          On mobile vehicle make name (BMW,Audi...) acts as a trigger for
          accordion. On desktop however, those are links taking user to the
          appropriate page.
        </p>
        <p>
          Vehicle model (A3, S3, RS3...) are acting as links to the appropriate
          page.
        </p>

        <h3 class="font-bold uppercase italic">Mobile</h3>
        <div class="flex flex-wrap gap-4 py-4 mb-4">
          <img src="/img/accordion-mobile-collapsed.png" alt="" />
          <img src="/img/accordion-mobile-expanded.png" alt="" />
        </div>

        <h3 class="font-bold uppercase italic">Desktop</h3>
        <div class="flex flex-wrap gap-4 py-4">
          <img src="/img/accordion-desktop.png" alt="" />
        </div>
      </div>

      <div id="multiColumnLayout" class="mb-10">
        <h2 class="text-lg font-bold">Multi column layout</h2>
        <p>
          Displays content in multiple columns. We should be able to specify
          number of columns through the class added on component for the given
          context. For example we should be able to control breakpoint at which
          we change number of columns.
        </p>

        <h3 class="text-lg font-bold">Mobile</h3>
        <img class="mb-10" src="/img/multi-column-mobile.png" alt="" />

        <h3 class="text-lg font-bold">
          Desktop (2 examples for the different use cases)
        </h3>
        <p>2 column layout on desktop</p>
        <img class="mb-10" src="/img/multi-column-2.png" alt="" />

        <p>3 column layout on desktop</p>
        <img class="mb-10" src="/img/multi-column-3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
}
</script>
