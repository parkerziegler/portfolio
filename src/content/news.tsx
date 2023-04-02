import * as React from 'react';

import InlineLink from '../components/Shared/InlineLink';

interface NewsItem {
  id: string;
  date: string;
  description: React.ReactNode;
}

export const NEWS: NewsItem[] = [
  {
    id: 'nsf-grfp-honorable-mention',
    date: 'Apr 2023',
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
    date: 'Mar 2023',
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
    date: 'Jan 2023',
    description: (
      <p>
        Our paper,{' '}
        <InlineLink
          href="/papers/a-need-finding-study-with-users-of-geospatial-data.pdf"
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
    date: 'Sep 2022',
    description:
      'I submitted the first paper of my Ph.D. to the ACM CHI Conference on Human Factors in Computing Systems!'
  },
  {
    id: 'ps-prelim',
    date: 'Sep 2022',
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
    date: 'Apr 2022',
    description: (
      <p>
        I gave a{' '}
        <InlineLink
          href="/slides/need-finding-geospatial-data.pdf"
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
    date: 'Feb 2022',
    description: (
      <p>
        I gave a{' '}
        <InlineLink href="/slides/reviz.pdf" type="light">
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
    date: 'Jan 2022',
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
    date: 'Oct 2021',
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
    date: 'Sep 2021',
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
    date: 'Aug 2021',
    description: (
      <p>
        I started my Ph.D. in Computer Science at the University of California,
        Berkeley. I&apos;ll be advised by Professor Sarah Chasins.
      </p>
    )
  },
  {
    id: 'phd-accept',
    date: 'Feb 2021',
    description: (
      <p>
        I was accepted to the Ph.D. program in Computer Science at the
        University of California, Berkeley! I&apos; be starting in Fall 2021
        semester.
      </p>
    )
  }
];
