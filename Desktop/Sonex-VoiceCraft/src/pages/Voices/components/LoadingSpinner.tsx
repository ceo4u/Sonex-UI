
interface LoadingSpinnerProps {
  isProcessing: boolean;
}

const LoadingSpinner = ({ isProcessing }: LoadingSpinnerProps) => {
  if (!isProcessing) return null;
  
  return (
    <div className="mb-6 flex justify-center" id="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
