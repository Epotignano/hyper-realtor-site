<script>
    export let testimonial;
</script>


<div
    class="py-8 px-4 sm:px-6 md:py-8 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16 dark:border-gray-700">
    <div class="relative text-lg font-medium text-gray-500 md:flex-grow">
        <svg
            class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600"
            fill="currentColor" viewBox="0 0 32 32">
            <path
                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
    </div>
    <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
        <div class="text-2xl leading-9 font-medium text-gray-900 dark:text-gray-200">
            {testimonial.quoteTitle}
        </div>
        <div class="dark:text-gray-400"> {testimonial.quote}</div>
        <footer class="mt-8">
            <div class="flex">
                <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white dark:border-gray-500">
<!--                    <img-->
<!--                        src={testimonial.authorAvatarUrl} alt="me" width="150" height="150"-->
<!--                        class="object-cover object-top rounded-full" />-->
                </div>
                <div class="ml-4">
                    <div class="text-base font-medium text-gray-500 dark:text-gray-300"> {testimonial.authorName} - {testimonial.companyName}</div>
                    <div class="text-base font-medium text-blue-500">{testimonial.authorLocation}</div>
                </div>
            </div>
        </footer>
    </blockquote>
</div>
