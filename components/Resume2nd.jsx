'use client';

import Image from 'next/image';

export default function Resume2nd() {
  return (
    <section className="py-9 px-4 ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <i className="text-white  md:text-sm leading-relaxed mb-8">
            “Donec et turpis vel ipsum viverra tempus et nec mauris. Mauris rhoncus condimentum enim sed consectetur. 
            Curabitur sit amet enim non tellus mattis commodo sit amet nec nunc. Nunc maximus egestas urna, ac mattis 
            mi consectetur eget. Sed vitae dignissim lectus, et rhoncus sapien. Praesent laoreet turpis nunc, et 
            pretium metus venenatis eu. Sed vulputate maximus posuere. Etiam laoreet maximus tellus. Etiam imperdiet 
            molestie justo in elementum. Quisque tempor”
          </i>

          <div className="flex justify-center">
            <Image
              src="/images/TTD.png"
              alt="Signature"
              width={500}
              height={150}
              className="object-contain"
            />
          </div>

          <div className="text-center">
            <h5 className="text-lg font-bold text-white">ARSLAN KHIZER</h5>
            <p className="text-sm text-[#ffde21]">Videography | Editor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
