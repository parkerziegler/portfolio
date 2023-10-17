import * as React from 'react';

import InlineLink from '../components/Shared/InlineLink';

interface NewsItem {
  id: string;
  date: Date;
  description: React.ReactNode;
}

export const NEWS: NewsItem[] = [
  {
    id: 'strange-loop-talk',
    date: new Date(2023, 8, 21),
    description: (
      <p>
        I gave my talk{' '}
        <InlineLink
          href="/slides/strange-loop-23-reviz-cartokit.pdf"
          type="light"
        >
          Supporting Data Journalism through Compilers for Visual Inputs
        </InlineLink>{' '}
        at Strange Loop 2023, the final Strange Loop. I also had a blast meeting
        the{' '}
        <InlineLink href="https://www.inkandswitch.com/" type="light">
          Ink & Switch
        </InlineLink>{' '}
        and{' '}
        <InlineLink href="https://github.com/tldraw/tldraw" type="light">
          tldraw
        </InlineLink>{' '}
        folks, having wonderfully too-long dinners and too-late nights, and
        learning about everything from{' '}
        <InlineLink
          href="https://thestrangeloop.com/2023/concatenative-programming-and-stack-based-languages.html"
          type="light"
        >
          concatenative stack-based programming languages
        </InlineLink>{' '}
        to{' '}
        <InlineLink
          href="https://thestrangeloop.com/2023/lessons-from-building-github-code-search.html"
          type="light"
        >
          how GitHub code search works
        </InlineLink>{' '}
        to{' '}
        <InlineLink
          href="https://thestrangeloop.com/2023/inside-the-wizard-research-engine.html"
          type="light"
        >
          supporting dynamic program analysis in VM design
        </InlineLink>
        .
      </p>
    )
  },
  {
    id: 'strange-loop-acceptance',
    date: new Date(2023, 4, 22),
    description: (
      <p>
        My talk,{' '}
        <InlineLink
          href="https://www.thestrangeloop.com/2023/supporting-data-journalism-through-compilers-for-visual-inputs.html"
          type="light"
        >
          Supporting Data Journalism through Compilers for Visual Inputs
        </InlineLink>{' '}
        was accepted to Strange Loop 2023!
      </p>
    )
  },
  {
    id: 'chi-2023-presentation',
    date: new Date(2023, 3, 25),
    description: (
      <p>
        I presented our paper,{' '}
        <InlineLink
          href="https://dl.acm.org/doi/10.1145/3544548.3581370"
          type="light"
        >
          A Need-Finding Study with Users of Geospatial Data
        </InlineLink>
        , at{' '}
        <InlineLink href="https://chi2023.acm.org/" type="light">
          CHI 2023
        </InlineLink>
        . Check out the{' '}
        <InlineLink
          href="https://youtu.be/ZIZTstW42w0?si=QbGL61RJJG1rLnX2"
          type="light"
        >
          pre-recorded talk
        </InlineLink>
        , watch
        <InlineLink
          href="https://youtu.be/R1fNwXdqqh0?si=YOvkhTMeJRzH_Lmt"
          type="light"
        >
          the teaser
        </InlineLink>
        , or check out the{' '}
        <InlineLink
          href="/slides/chi-23-need-finding-geospatial-data.pdf"
          type="light"
        >
          slides
        </InlineLink>
        !
      </p>
    )
  },
  {
    id: 'epic-retreat',
    date: new Date(2023, 3, 18),
    description: (
      <p>
        I gave{' '}
        <InlineLink
          href="/slides/epic-retreat-23-need-finding-geospatial-data.pdf"
          type="light"
        >
          a talk
        </InlineLink>{' '}
        about my need-finding work with geospatial data users—as well as a
        preview of a new direct manipulation programming system for interactive
        cartography—at the first EPIC Data Lab retreat.
      </p>
    )
  },
  {
    id: 'nsf-grfp-honorable-mention',
    date: new Date(2023, 3, 3),
    description: (
      <p>
        I won an{' '}
        <InlineLink
          href="https://www.research.gov/grfp/AwardeeList.do?method=loadAwardeeList"
          type="light"
        >
          Honorable Mention in the 2023 NSF Graduate Research Fellowship Program
          comptetion
        </InlineLink>{' '}
        for my research on programming languages and interfaces for working with
        geospatial data.
      </p>
    )
  },
  {
    id: 'outstanding-gsi-award',
    date: new Date(2023, 2, 20),
    description: (
      <p>
        I was awarded the{' '}
        <InlineLink
          href="https://gsi.berkeley.edu/programs-services/award-programs/ogsi/ogsi-recipients-2022-2023/"
          type="light"
        >
          Outstanding Graduate Student Instructor Award
        </InlineLink>{' '}
        for my teaching in{' '}
        <InlineLink
          href="https://inst.eecs.berkeley.edu/~cs164/fa22/"
          type="light"
        >
          CS164: Programming Languages and Compilers
        </InlineLink>{' '}
        at UC Berkeley!
      </p>
    )
  },
  {
    id: 'chi-2023-acceptance',
    date: new Date(2023, 0, 13),
    description: (
      <p>
        My paper,{' '}
        <InlineLink
          href="https://dl.acm.org/doi/10.1145/3544548.3581370"
          type="light"
        >
          A Need-Finding Study with Users of Geospatial Data
        </InlineLink>
        , was accepted to the 2023 ACM CHI Conference on Human Factors in
        Computing Systems!
      </p>
    )
  },
  {
    id: 'chi-2023',
    date: new Date(2022, 8, 15),
    description:
      'I submitted the first paper of my Ph.D. to the ACM CHI Conference on Human Factors in Computing Systems!'
  },
  {
    id: 'ps-prelim',
    date: new Date(2022, 8, 9),
    description: (
      <p>
        I passed the{' '}
        <InlineLink
          href="https://eecs.berkeley.edu/resources/grads/phd/prelims/exam-prep"
          type="light"
        >
          Programming Systems Preliminary Exam
        </InlineLink>{' '}
        at UC Berkeley! A summer of studying culminated in an hour of questions
        on static and dynamic dispatch, symbolic execution, and axiomatic
        semantics.
      </p>
    )
  },
  {
    id: 'ps-seminar-talk',
    date: new Date(2022, 3, 7),
    description: (
      <p>
        I gave a{' '}
        <InlineLink
          href="/slides/ps-seminar-22-need-finding-geospatial-data.pdf"
          type="light"
        >
          talk
        </InlineLink>{' '}
        at the Programming Systems Seminar at UC Berkeley discussing early
        findings from my need-finding study with users of geospatial data.
      </p>
    )
  },
  {
    id: 'reviz-talk',
    date: new Date(2022, 2, 9),
    description: (
      <p>
        I gave a{' '}
        <InlineLink href="/slides/epic-meeting-23-reviz.pdf" type="light">
          talk
        </InlineLink>{' '}
        at the EPIC Data Lab Seminar at UC Berkeley about my work on{' '}
        <InlineLink href="https://github.com/parkerziegler/reviz" type="light">
          <code>reviz</code>
        </InlineLink>
        .
      </p>
    )
  },
  {
    id: 'reviz-launch',
    date: new Date(2021, 11, 21),
    description: (
      <p>
        I open-sourced and released{' '}
        <InlineLink href="https://github.com/parkerziegler/reviz" type="light">
          <code>reviz</code>
        </InlineLink>
        , a lightweight engine for automatically reverse engineering data
        visualizations from the DOM. Check out the{' '}
        <InlineLink
          href="https://observablehq.com/@parkerziegler/hello-reviz"
          type="light"
        >
          announcement notebook
        </InlineLink>{' '}
        on Observable.
      </p>
    )
  },
  {
    id: 'plmw',
    date: new Date(2021, 9, 17),
    description: (
      <p>
        I&apos;m attending the{' '}
        <InlineLink
          href="https://2021.splashcon.org/track/splash-2021-PLMW?plenary=Hide%20plenary%20sessions"
          type="light"
        >
          Programming Languages Mentoring Workshp (PLMW) at SPLASH
        </InlineLink>
        .
      </p>
    )
  },
  {
    id: 'irb-approval',
    date: new Date(2021, 8, 19),
    description: (
      <p>
        My first IRB proposal was approved and I&apos;m starting a{' '}
        <InlineLink
          href="https://en.wikipedia.org/wiki/Contextual_inquiry"
          type="light"
        >
          contextual inquiry
        </InlineLink>{' '}
        exploring how data journalists, Earth and climate scientists, and social
        scientists use geospatial data.
      </p>
    )
  },
  {
    id: 'phd-start',
    date: new Date(2021, 7, 18),
    description: (
      <p>
        I started my Ph.D. in Computer Science at the University of California,
        Berkeley. I&apos;ll be advised by Professor Sarah Chasins.
      </p>
    )
  },
  {
    id: 'phd-accept',
    date: new Date(2021, 1, 3),
    description: (
      <p>
        I was accepted to the Ph.D. program in Computer Science at the
        University of California, Berkeley! I&apos; be starting in Fall 2021
        semester.
      </p>
    )
  }
];
