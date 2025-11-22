import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
  link: string;
  role: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'نظرة عامة',
    role: 'Overview',
    link: '/docs/overview',
    description: (
      <>
        تعرف على رؤية منصة شذرات، أهدافها الاستراتيجية، والجمهور المستهدف الذي نسعى لخدمته.
      </>
    ),
  },
  {
    title: 'الميزات والخصائص',
    role: 'Features',
    link: '/docs/core-features',
    description: (
      <>
        اكتشف القدرات التقنية للمنصة، من مشغل الفيديو المتقدم إلى غرف المشاهدة الجماعية.
      </>
    ),
  },
  {
    title: 'هيكلة المحتوى',
    role: 'Content',
    link: '/docs/content-structure',
    description: (
      <>
        فهم عميق لتنظيم الأقسام، السلاسل، ملفات المشايخ، وأنواع الوسائط المختلفة.
      </>
    ),
  },
  {
    title: 'تجربة المستخدم',
    role: 'UX & UI',
    link: '/docs/user-experience',
    description: (
      <>
        جولة في واجهات التطبيق، وضع الأطفال، ونظام التخصيص الذي يركز على راحة المشاهد.
      </>
    ),
  },
];

function Feature({ title, description, link, role }: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <div className={styles.roleBadge}>{role}</div>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--sm"
            to={link}>
            تصفح القسم &larr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
