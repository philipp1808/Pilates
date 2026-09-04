'use client';

import { useCallback, useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { courses } from '@/app/site-data';

export default function HomeCoursesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeCourse, setActiveCourse] = useState(0);

  const syncActiveCourse = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setActiveCourse(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    syncActiveCourse(api);
    api.on('select', syncActiveCourse);
    api.on('reInit', syncActiveCourse);
    return () => {
      api.off('select', syncActiveCourse);
      api.off('reInit', syncActiveCourse);
    };
  }, [api, syncActiveCourse]);

  function selectCourse(index: number) {
    setActiveCourse(index);
    api?.scrollTo(index);
  }

  return (
    <div className="home-class-explorer">
      <div className="home-class-tabs" role="tablist" aria-label="Kurs auswählen">
        {courses.map((course, index) => (
          <div className="home-class-tab-item" key={course.name}>
            {index > 0 && <span className="home-class-divider" aria-hidden="true" />}
            <button
              type="button"
              role="tab"
              aria-selected={activeCourse === index}
              aria-controls={`home-course-${index}`}
              className={activeCourse === index ? 'is-active' : ''}
              onClick={() => selectCourse(index)}
            >
              <span>{course.number}</span>
              {course.name}
            </button>
          </div>
        ))}
      </div>

      <Carousel
        className="home-class-carousel"
        opts={{ align: 'start', containScroll: 'keepSnaps', loop: true }}
        setApi={setApi}
      >
        <CarouselContent className="home-class-track">
          {courses.map((course, index) => (
            <CarouselItem className="home-class-slide" key={course.name}>
              <article
                className="home-class-card"
                id={`home-course-${index}`}
                role="tabpanel"
                aria-label={course.name}
              >
                <div className={course.tone} aria-hidden="true">
                  <span>{course.strap}</span>
                  <b>{course.number}</b>
                  <div className="visual-line" />
                </div>
                <div>
                  <p>{course.number} / {course.level}</p>
                  <h3>{course.name}</h3>
                  <span>{course.description}</span>
                  <a href="/angebot">
                    Class entdecken <ArrowUpRight />
                  </a>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="home-class-swipe-hint" aria-hidden="true">
        <span>←</span> Swipen oder ziehen <span>→</span>
      </p>
    </div>
  );
}
