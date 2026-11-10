export default function SectionHeading({
  index,
  label,
  title,
  intro,
}: {
  index: string
  label: string
  title: string
  intro?: React.ReactNode
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="ds-label-accent mb-4">
        {index} / {label}
      </p>
      <h2 className="ds-h2">{title}</h2>
      {intro && <p className="ds-body-lg mt-5">{intro}</p>}
    </div>
  )
}
